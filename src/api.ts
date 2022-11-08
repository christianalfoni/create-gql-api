// This file is read and written using FS. The Query types will be available in the merged
// generated file
type FieldQuery<A extends Record<string, unknown>, T> = T & { __: A };

type ListQuery<
  A extends Record<string, unknown>,
  T extends Record<string, unknown>
> = Array<T> & { __: A };

type ObjectQueryDefinition = [
  Record<string, unknown>,
  QueryDefinitions,
  ...never[]
];

type FieldQueryDefinition = [Record<string, unknown>, ...never[]];

type AliasQueryDefinition = { $ALIAS: string; $QUERY: ObjectQueryDefinition };

type QueryDefinition =
  | boolean
  | ObjectQueryDefinition
  | FieldQueryDefinition
  | AliasQueryDefinition
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
        | ObjectQueryDefinition
        | FieldQueryDefinition
        | ResolveQueryDefinitions<{}>
        | boolean;
    };

type ResolveQuery<
  T extends QueryDefinitions,
  U extends Record<string, unknown>
> = {
  [K in keyof T]: T[K] extends AliasQueryDefinition
    ? T[K]["$ALIAS"] extends keyof U
      ? T[K]["$QUERY"] extends ObjectQueryDefinition
        ? U[T[K]["$ALIAS"]] extends ListQuery<any, infer Q>
          ? Array<ResolveQuery<T[K]["$QUERY"][1], Q>>
          : U[T[K]["$ALIAS"]] extends FieldQuery<any, infer Q>
          ? Q extends Record<string, unknown>
            ? ResolveQuery<T[K]["$QUERY"][1], Q>
            : Q
          : U[T[K]["$ALIAS"]]
        : never
      : never
    : K extends keyof U
    ? T[K] extends ObjectQueryDefinition
      ? U[K] extends ListQuery<any, infer Q>
        ? Array<ResolveQuery<T[K][1], Q>>
        : U[K] extends FieldQuery<any, infer Q>
        ? Q extends Record<string, unknown>
          ? ResolveQuery<T[K][1], Q>
          : Q
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

export type Requester = (
  query: string,
  variables: Record<string, unknown> | void
) => Promise<Record<string, unknown>>;

export type Subscriber = (
  query: string,
  onMessage: (message: unknown) => void,
  variables: Record<string, unknown> | void
) => () => void;

export const createClient = ({
  onRequest,
  onSubscribe,
  includeTypeNames,
  cacheQueries,
}: {
  onRequest: Requester;
  onSubscribe: Subscriber;
  includeTypeNames: boolean;
  cacheQueries: boolean;
}): {
  query: <
    T extends (
      request: Requester,
      variables: any,
      options: { includeTypeNames: boolean; cacheQueries: boolean }
    ) => Promise<Record<string, unknown>>
  >(
    query: T,
    ...variables: Parameters<T>[1] extends void ? [] : [Parameters<T>[1]]
  ) => ReturnType<T>;
  subscribe: <
    T extends (
      subscribe: Subscriber,
      onMessage: (message: unknown) => void,
      variables: any,
      options: { includeTypeNames: boolean; cacheQueries: boolean }
    ) => () => void
  >(
    query: T,
    onMessage: Parameters<T>[1],
    ...variables: Parameters<T>[2] extends void ? [] : [Parameters<T>[2]]
  ) => ReturnType<T>;
} => {
  return {
    query: (query, ...variables) =>
      query(onRequest, variables[0], { includeTypeNames, cacheQueries }) as any,
    subscribe: (query, onMessage, ...variables) =>
      query(onSubscribe, onMessage, variables[0], {
        includeTypeNames,
        cacheQueries,
      }) as any,
  };
};

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

export function isObjectQueryDefinition(
  queryDefinition: QueryDefinition
): queryDefinition is ObjectQueryDefinition {
  return Array.isArray(queryDefinition) && queryDefinition.length === 2;
}

export function isFieldQueryDefinition(
  queryDefinition: QueryDefinition
): queryDefinition is FieldQueryDefinition {
  return Array.isArray(queryDefinition) && queryDefinition.length === 1;
}

export function isAliasQueryDefinition(
  queryDefinition: QueryDefinition
): queryDefinition is AliasQueryDefinition {
  return typeof queryDefinition === "object" && "$ALIAS" in queryDefinition;
}

export function createQueryBodyString(
  QueryDefinitions: QueryDefinitions,
  detectedVariableTypes: DetectedVariableTypes,
  includeTypeNames: boolean,
  level = 1
) {
  let string = " {\n";

  if (includeTypeNames) {
    string += "  ".repeat(level) + "__typename\n";
  }

  for (const field in QueryDefinitions) {
    const value = QueryDefinitions[field];

    if (value === false) {
      continue;
    }

    string += "  ".repeat(level) + field;

    if (value === true) {
      string += "\n";
    } else if (isFieldQueryDefinition(value)) {
      string +=
        createQueryArgumentsString(field, value[0], detectedVariableTypes) +
        "\n";
    } else if (isObjectQueryDefinition(value)) {
      string +=
        createQueryArgumentsString(field, value[0], detectedVariableTypes) +
        createQueryBodyString(
          value[1],
          detectedVariableTypes,
          includeTypeNames,
          level + 1
        );
    } else if (isAliasQueryDefinition(value)) {
      string += `: ${value.$ALIAS}${createQueryArgumentsString(
        value.$ALIAS,
        value.$QUERY[0],
        detectedVariableTypes
      )}${createQueryBodyString(
        value.$QUERY[1],
        detectedVariableTypes,
        includeTypeNames,
        level + 1
      )}`;
    } else {
      string += createQueryBodyString(
        value,
        detectedVariableTypes,
        includeTypeNames,
        level + 1
      );
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

function createQueryStringFactory(type: string) {
  return function createQueryStringFactory(
    name: string,
    query: QueryDefinitions,
    variables: Record<string, unknown> | undefined,
    includeTypeNames: boolean
  ) {
    const detectedVariableTypes: Record<
      string,
      { isNonNull: boolean; type: string }
    > = {};
    const queryBodyString = createQueryBodyString(
      query,
      detectedVariableTypes,
      includeTypeNames
    );

    return `${type} ${name} ${
      variables
        ? `(${createVariablesString(variables, detectedVariableTypes)})`
        : ""
    }${queryBodyString}`;
  };
}

const createQueryString = createQueryStringFactory("query");
const createMutationString = createQueryStringFactory("mutation");
const createSubscriptionString = createQueryStringFactory("subscription");

export const createMutation =
  <
    V extends Record<string, unknown> | void,
    T extends ResolveQueryDefinitions<RootMutationType>
  >(
    name: string,
    cb: T | ((variables: V) => T)
  ) =>
  (
    request: Requester,
    variables: V,
    {
      cacheQueries,
      includeTypeNames,
    }: { includeTypeNames: boolean; cacheQueries: boolean }
  ): Promise<ResolveQuery<T, RootMutationType>> => {
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
      createMutationString(
        name,
        query,
        variables ? variables : undefined,
        includeTypeNames
      ),
      variables
        ? Object.keys(variables).reduce<Record<string, unknown>>(
            (aggr, key) => {
              aggr[key] = variables[key];

              return aggr;
            },
            {}
          )
        : {}
    ) as Promise<ResolveQuery<T, RootMutationType>>;
  };

export const createQuery =
  <
    V extends Record<string, unknown> | void,
    T extends ResolveQueryDefinitions<RootQueryType>
  >(
    name: string,
    cb: T | ((variables: V) => T)
  ) =>
  (
    request: Requester,
    variables: V,
    {
      cacheQueries,
      includeTypeNames,
    }: { includeTypeNames: boolean; cacheQueries: boolean }
  ): Promise<ResolveQuery<T, RootQueryType>> => {
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
      createQueryString(
        name,
        query,
        variables ? variables : undefined,
        includeTypeNames
      ),
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
  };

export const createSubscription =
  <
    V extends Record<string, unknown> | void,
    T extends ResolveQueryDefinitions<RootSubscriptionType>
  >(
    name: string,
    cb: T | ((variables: V) => T)
  ) =>
  (
    subscribe: Subscriber,
    onMessage: (message: T) => void,
    variables: V,
    {
      cacheQueries,
      includeTypeNames,
    }: { includeTypeNames: boolean; cacheQueries: boolean }
  ): (() => void) => {
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

    return subscribe(
      createSubscriptionString(
        name,
        query,
        variables ? variables : undefined,
        includeTypeNames
      ),
      onMessage as any,
      variables
        ? Object.keys(variables).reduce<Record<string, unknown>>(
            (aggr, key) => {
              aggr[key] = variables[key];

              return aggr;
            },
            {}
          )
        : {}
    );
  };
