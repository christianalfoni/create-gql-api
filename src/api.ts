type FieldQuery<A extends Record<string, unknown>, T> = T & { __: A };

type ListQuery<
  A extends Record<string, unknown>,
  T extends Record<string, unknown>
> = Array<T> & { __: A };

type ListQueryDefinition = [
  Record<string, unknown>,
  QueryDefinition,
  ...never[]
];

type FieldQueryDefinition = [Record<string, unknown>, ...never[]];

type AliasQueryDefinition = { $ALIAS: string; $QUERY: ListQueryDefinition };

type QueryDefinition = {
  [key: string]:
    | boolean
    | ListQueryDefinition
    | FieldQueryDefinition
    | AliasQueryDefinition
    | QueryDefinition;
};

type ResolveQueryDefinition<T extends Record<string, unknown>> =
  | {
      [K in keyof T]?: T[K] extends ListQuery<infer A, infer B>
        ? [A, ResolveQueryDefinition<B>, ...never[]]
        : T[K] extends FieldQuery<infer A, infer B>
        ? B extends Record<string, unknown>
          ? [A, ResolveQueryDefinition<B>, ...never[]]
          : [A, ...never[]]
        : T[K] extends Record<string, unknown>
        ? ResolveQueryDefinition<T[K]>
        : boolean;
    } & {
      [key: string]:
        | {
            [K in keyof T]: T[K] extends ListQuery<infer A, infer B>
              ? {
                  $ALIAS: K;
                  $QUERY: [A, ResolveQueryDefinition<B>, ...never[]];
                }
              : never;
          }[keyof T]
        | ListQueryDefinition
        | FieldQueryDefinition
        | ResolveQueryDefinition<{}>
        | boolean;
    };

type ResolveQuery<
  T extends QueryDefinition,
  U extends Record<string, unknown>
> = {
  [K in keyof T]: T[K] extends AliasQueryDefinition
    ? T[K]["$ALIAS"] extends keyof U
      ? T[K]["$QUERY"] extends ListQueryDefinition
        ? U[T[K]["$ALIAS"]] extends ListQuery<any, infer Q>
          ? Array<ResolveQuery<T[K]["$QUERY"][1], Q>>
          : U[T[K]["$ALIAS"]] extends FieldQuery<any, infer Q>
          ? Q
          : U[T[K]["$ALIAS"]]
        : never
      : never
    : K extends keyof U
    ? T[K] extends ListQueryDefinition
      ? U[K] extends ListQuery<any, infer Q>
        ? Array<ResolveQuery<T[K][1], Q>>
        : U[K] extends FieldQuery<any, infer Q>
        ? Q
        : never
      : T[K] extends QueryDefinition
      ? U[K] extends Record<string, unknown>
        ? ResolveQuery<T[K], U[K]>
        : U[K]
      : U[K]
    : never;
};

export function createQueryBodyString(
  queryDefinition: QueryDefinition,
  level = 1
) {
  let alias = "$ALIAS" in queryDefinition ? queryDefinition.$ALIAS : undefined;
  let query =
    "$ALIAS" in queryDefinition ? queryDefinition.$QUERY : queryDefinition;

  let string = "";

  if (alias) {
    string += ": " + alias;
  }

  if (Array.isArray(query) && query.length === 1) {
    const args = query[0] as Record<string, unknown>;

    string += `(${Object.keys(args)
      .reduce<string[]>((aggr, key) => {
        const val = args[key];
        return aggr.concat(
          `${key}: ${
            typeof val === "string" && val[0] !== "$" ? `"${val}"` : val
          }`
        );
      }, [])
      .join(", ")})\n`;

    string += "  ".repeat(level - 1) + "}\n";

    return string;
  }

  if (Array.isArray(query) && query.length === 2) {
    const args = query[0] as Record<string, unknown>;
    const queryArg = query[1] as Record<string, unknown>;

    string += ` (${Object.keys(args)
      .reduce<string[]>((aggr, key) => {
        const val = args[key];
        return aggr.concat(
          `${key}: ${
            typeof val === "string" && val[0] !== "$" ? `"${val}"` : val
          }`
        );
      }, [])
      .join(", ")}) {\n`;

    for (const field in queryArg) {
      const value = (queryArg as QueryDefinition)[field];
      if (value === true) {
        string += "  ".repeat(level) + field + "\n";
      } else if (value) {
        string +=
          "  ".repeat(level) +
          field +
          (Array.isArray(value) || "$ALIAS" in value ? "" : " {\n") +
          createQueryBodyString(value as QueryDefinition, level + 1);
      }
    }

    string += "  ".repeat(level - 1) + "}\n";

    return string;
  }

  for (const field in query as QueryDefinition) {
    const value = (query as QueryDefinition)[field];

    if (value === true) {
      string += "  ".repeat(level) + field + "\n";
    } else if (value) {
      string +=
        "  ".repeat(level) +
        field +
        (Array.isArray(value) || "$ALIAS" in value ? "" : " {\n") +
        createQueryBodyString(value as QueryDefinition, level + 1);
    }
  }

  string += "  ".repeat(level - 1) + "}\n";

  return string;
}

function getGqlType(key: string, value: unknown) {
  if (typeof value === "boolean") {
    return "Boolean";
  }

  if (typeof value === "number") {
    return value % 1 != 0 ? "Int" : "Float";
  }

  if (typeof value === "string") {
    return "String";
  }

  throw new Error("Invalid variable type");
}

function createVariablesString(variables: Record<string, unknown>) {
  return Object.keys(variables)
    .map((key) => `$${key}: ${getGqlType(key, variables[key])}`)
    .join(", ");
}

function createQueryString(
  name: string,
  query: QueryDefinition,
  variables?: Record<string, unknown>
) {
  return `query ${name} ${
    variables ? `(${createVariablesString(variables)}) {\n` : "{\n"
  }${createQueryBodyString(query)}`;
}

export const createApi = (
  request: (
    query: string,
    variables: Record<string, unknown>
  ) => Promise<unknown>
) => ({
  query:
    <
      V extends Record<string, unknown> | void,
      T extends ResolveQueryDefinition<RootQueryType>
    >(
      name: string,
      cb: T | ((variables: V) => T)
    ) =>
    (variables: V): Promise<ResolveQuery<T, RootQueryType>> => {
      const query =
        typeof cb === "function"
          ? cb(
              Object.keys(variables || {}).reduce<Record<string, string>>(
                (aggr, key) => {
                  aggr[key] = "$" + key;

                  return aggr;
                },
                {}
              ) as V
            )
          : cb;

      return request(
        createQueryString(name, query, variables ? variables : undefined),
        variables
          ? Object.keys(variables).reduce<Record<string, unknown>>(
              (aggr, key) => {
                aggr[key] = variables[key];

                return aggr;
              },
              {}
            )
          : {}
      ) as Promise<ResolveQuery<T, RootQueryType>>;
    },
});
