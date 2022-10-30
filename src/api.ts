type FieldQuery<A extends Record<string, unknown>, T> = T & { __: A };

type ListQuery<
  A extends Record<string, unknown>,
  T extends Record<string, unknown>
> = Array<T> & { __: A };

type ListQueryDefinitions = [
  Record<string, unknown>,
  QueryDefinitions,
  ...never[]
];

type FieldQueryDefinitions = [Record<string, unknown>, ...never[]];

type AliasQueryDefinitions = { $ALIAS: string; $QUERY: ListQueryDefinitions };

type QueryDefinition =
  | boolean
  | ListQueryDefinitions
  | FieldQueryDefinitions
  | AliasQueryDefinitions
  | QueryDefinitions;

type QueryDefinitions = {
  [key: string]: QueryDefinition;
};

type ResolveQueryDefinitions<T extends Record<string, unknown>> =
  | {
      [K in keyof T]?: T[K] extends ListQuery<infer A, infer B>
        ? [A, ResolveQueryDefinitions<B>, ...never[]]
        : T[K] extends FieldQuery<infer A, infer B>
        ? B extends Record<string, unknown>
          ? [A, ResolveQueryDefinitions<B>, ...never[]]
          : [A, ...never[]]
        : T[K] extends Record<string, unknown>
        ? ResolveQueryDefinitions<T[K]>
        : boolean;
    } & {
      [key: string]:
        | {
            [K in keyof T]: T[K] extends ListQuery<infer A, infer B>
              ? {
                  $ALIAS: K;
                  $QUERY: [A, ResolveQueryDefinitions<B>, ...never[]];
                }
              : T[K] extends FieldQuery<infer A, infer B>
              ? {
                  $ALIAS: K;
                  $QUERY: B extends Record<string, unknown>
                    ? [A, ResolveQueryDefinitions<B>, ...never[]]
                    : [A, ...never[]];
                }
              : never;
          }[keyof T]
        | ListQueryDefinitions
        | FieldQueryDefinitions
        | ResolveQueryDefinitions<{}>
        | boolean;
    };

type ResolveQuery<
  T extends QueryDefinitions,
  U extends Record<string, unknown>
> = {
  [K in keyof T]: T[K] extends AliasQueryDefinitions
    ? T[K]["$ALIAS"] extends keyof U
      ? T[K]["$QUERY"] extends ListQueryDefinitions
        ? U[T[K]["$ALIAS"]] extends ListQuery<any, infer Q>
          ? Array<ResolveQuery<T[K]["$QUERY"][1], Q>>
          : U[T[K]["$ALIAS"]] extends FieldQuery<any, infer Q>
          ? Q
          : U[T[K]["$ALIAS"]]
        : never
      : never
    : K extends keyof U
    ? T[K] extends ListQueryDefinitions
      ? U[K] extends ListQuery<any, infer Q>
        ? Array<ResolveQuery<T[K][1], Q>>
        : U[K] extends FieldQuery<any, infer Q>
        ? Q
        : never
      : T[K] extends QueryDefinitions
      ? U[K] extends Record<string, unknown>
        ? ResolveQuery<T[K], U[K]>
        : U[K]
      : U[K]
    : never;
};

type DetectedVariableTypes = Record<
  string,
  { isNonNull: boolean; type: string }
>;

export function createQueryArgumentsString(
  fieldKey: string,
  args: Record<string, unknown>,
  detectedVariableTypes: DetectedVariableTypes
) {
  return `(${Object.keys(args)
    .reduce<string[]>((aggr, key) => {
      const val = args[key];
      const isVariable = typeof val === "string" && val[0] === "$";

      if (isVariable) {
        detectedVariableTypes[val] = argumentsByField[fieldKey][key];
      }

      return aggr.concat(`${key}: ${isVariable ? val : `"${val}"`}`);
    }, [])
    .join(", ")})`;
}

export function isAliasQueryDefinition(
  queryDefinition: QueryDefinition
): queryDefinition is AliasQueryDefinitions {
  return typeof queryDefinition === "object" && "$ALIAS" in queryDefinition;
}

export function createQueryBodyString(
  QueryDefinitions: QueryDefinitions,
  detectedVariableTypes: DetectedVariableTypes,
  level = 1
) {
  let string = " {\n";

  for (const field in QueryDefinitions) {
    const value = QueryDefinitions[field];

    if (value === false) {
      continue;
    }

    string += "  ".repeat(level) + field;

    if (value === true) {
      string += "\n";
    } else if (Array.isArray(value) && value.length === 1) {
      string +=
        createQueryArgumentsString(field, value[0], detectedVariableTypes) +
        "\n";
    } else if (Array.isArray(value) && value.length === 2) {
      string +=
        createQueryArgumentsString(field, value[0], detectedVariableTypes) +
        createQueryBodyString(value[1], detectedVariableTypes, level + 1);
    } else if (isAliasQueryDefinition(value)) {
      string += `: ${value.$ALIAS}${createQueryArgumentsString(
        value.$ALIAS,
        value.$QUERY[0],
        detectedVariableTypes
      )}${createQueryBodyString(
        value.$QUERY[1],
        detectedVariableTypes,
        level + 1
      )}`;
    }
  }

  string += "  ".repeat(level - 1) + "}\n";

  return string;
}

function createVariablesString(
  variables: Record<string, unknown>,
  detectedVariableTypes: Record<string, { isNonNull: boolean; type: string }>
) {
  return Object.keys(variables)
    .map((key) => {
      let varKey = `$${key}`;
      let gqlType = detectedVariableTypes[varKey];

      if (!gqlType) {
        throw new Error(`Unable to detect variable type for key ${key}`);
      }

      return `${varKey}: ${gqlType.type}${gqlType.isNonNull ? "!" : ""}`;
    })
    .join(", ");
}

function createQueryString(
  name: string,
  query: QueryDefinitions,
  variables?: Record<string, unknown>
) {
  const detectedVariableTypes: Record<
    string,
    { isNonNull: boolean; type: string }
  > = {};
  const queryBodyString = createQueryBodyString(query, detectedVariableTypes);

  return `query ${name} ${
    variables
      ? `(${createVariablesString(variables, detectedVariableTypes)})`
      : ""
  }${queryBodyString}`;
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
      T extends ResolveQueryDefinitions<RootQueryType>
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
