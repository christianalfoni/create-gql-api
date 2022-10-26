type QueryObject = Record<
  string,
  {
    type: unknown;
    arguments: Record<string, unknown> | null;
  }
>;

type MakeCustomQueryable<T extends QueryObject> = {
  [key: string]: {
    [K in keyof T]?: T[K]["type"] extends QueryObject
      ? T[K]["arguments"] extends Record<string, unknown>
        ? {
            $FIELD: K;
            $ARGS: T[K]["arguments"];
            $FIELDS: MakeQueryable<T[K]["type"]>;
          }
        : {
            $FIELD: K;
            $FIELDS: MakeQueryable<T[K]["type"]>;
          }
      : never;
  }[keyof T];
};

type MakeQueryable<T extends QueryObject> =
  | {
      [K in keyof T]?: T[K]["type"] extends QueryObject
        ? T[K]["arguments"] extends Record<string, unknown>
          ? {
              $ARGS: T[K]["arguments"];
              $FIELDS: MakeQueryable<T[K]["type"]>;
              $ALIAS?: MakeCustomQueryable<T[K]["type"]>;
            }
          :
              | boolean
              | {
                  $FIELDS: MakeQueryable<T[K]["type"]>;
                  $ALIAS?: MakeCustomQueryable<T[K]["type"]>;
                }
        : boolean;
    };

type CustomQuery = {
  $FIELD: string;
  // This is not really optional, but simplifies internal typing
  $ARGS?: Record<string, unknown>;
  $FIELDS: {
    [key: string]: Query | boolean;
  };
};

type Query = {
  $FIELDS: {
    [key: string]: Query | boolean;
  };
  $ARGS?: Record<string, unknown>;
  $ALIAS?: {
    [key: string]: CustomQuery | undefined;
  };
};

type ResolveQueryField<
  T extends true | boolean | Query,
  K extends unknown
> = T extends true
  ? K
  : T extends boolean
  ? K | undefined
  : T extends Query
  ? K extends QueryObject
    ? ResolveQuery<T, K>
    : never
  : never;

type ResolveQuery<T extends Query, Q extends QueryObject> = {
  [K in keyof T["$FIELDS"]]: K extends keyof Q
    ? Q[K] extends { isList: true }
      ? Array<ResolveQueryField<T["$FIELDS"][K], Q[K]["type"]>>
      : ResolveQueryField<T["$FIELDS"][K], Q[K]["type"]>
    : never;
} & {
  [K in keyof T["$ALIAS"]]: T["$ALIAS"][K] extends CustomQuery
    ? T["$ALIAS"][K]["$FIELD"] extends keyof Q
      ? Q[T["$ALIAS"][K]["$FIELD"]]["arguments"] extends Record<string, unknown>
        ? Q[T["$ALIAS"][K]["$FIELD"]] extends { isList: true }
          ? Array<
              ResolveQueryField<
                T["$ALIAS"][K],
                Q[T["$ALIAS"][K]["$FIELD"]]["type"]
              >
            >
          : ResolveQueryField<
              T["$ALIAS"][K],
              Q[T["$ALIAS"][K]["$FIELD"]]["type"]
            >
        : never
      : never
    : never;
};

function createQueryString(query: Query, level = 1) {
  let string = "";

  if (query.$ARGS) {
    const args = query.$ARGS;
    string += `(${Object.keys(args).reduce((aggr, key) => {
      return aggr + `${key}: ${args[key]}`;
    }, "")}) {\n`;
  } else {
    string += "{\n";
  }

  for (const field in query.$FIELDS) {
    const value = query.$FIELDS[field];
    if (value === true) {
      string += "  ".repeat(level) + field + "\n";
    } else if (value) {
      string +=
        "  ".repeat(level) + field + " " + createQueryString(value, level + 1);
    }
  }

  for (const field in query.$ALIAS) {
    const value = query.$ALIAS[field];
    if (value) {
      string +=
        "  ".repeat(level) +
        field +
        ": " +
        value.$FIELD +
        " " +
        createQueryString(value, level + 1);
    }
  }

  string += "  ".repeat(level - 1) + "}\n";

  return string;
}

export const createQueryApi =
  (
    request: (
      query: string,
      variables: Record<string, unknown>
    ) => Promise<unknown>
  ) =>
  <
    V extends Record<string, unknown>,
    T extends {
      $FIELDS: MakeQueryable<RootQueryType>;
      $ALIAS?: MakeCustomQueryable<RootQueryType>;
    }
  >(
    name: string,
    cb: (variables: V) => T
  ) =>
  (variables: V): Promise<ResolveQuery<T, RootQueryType>> => {
    const query = cb(
      Object.keys(variables).reduce<Record<string, string>>((aggr, key) => {
        aggr[key] = "$" + key.toUpperCase();

        return aggr;
      }, {}) as V
    );

    return request(
      `query ${name} (${Object.keys(variables)
        .map((key) => "$" + key.toUpperCase())
        .join(", ")}) ${createQueryString(query)}`,
      Object.keys(variables).reduce<Record<string, unknown>>((aggr, key) => {
        aggr["$" + key.toUpperCase()] = variables[key];

        return aggr;
      }, {}) as V
    ) as Promise<ResolveQuery<T, RootQueryType>>;
  };
