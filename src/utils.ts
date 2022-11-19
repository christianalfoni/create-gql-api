import {
  AliasQueryDefinition,
  ArgumentsByField,
  DetectedVariableTypes,
  FieldQueryDefinition,
  ObjectQueryDefinition,
  Query,
  QueryDefinition,
  QueryDefinitions,
  Requester,
  ResolveQuery,
  ResolveQueryDefinitions,
  Subscriber,
  Subscription,
} from "./types";

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
  query: <T extends Query>(
    query: T,
    ...variables: Parameters<T>[1] extends void ? [] : [Parameters<T>[1]]
  ) => ReturnType<T>;
  subscribe: <T extends Subscription>(
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

export const createQueryUtils: <
  RootQueryType extends Record<string, unknown>,
  RootMutationType extends Record<string, unknown>,
  RootSubscriptionType extends Record<string, unknown>
>(
  argumentsByField: ArgumentsByField
) => {
  createQuery: <
    V extends Record<string, unknown> | void,
    T extends ResolveQueryDefinitions<RootQueryType>
  >(
    name: string,
    cb: T | ((variables: V) => T)
  ) => (
    request: Requester,
    variables: V,
    {
      cacheQueries,
      includeTypeNames,
    }: { includeTypeNames: boolean; cacheQueries: boolean }
  ) => Promise<ResolveQuery<T, RootQueryType>>;
  createMutation: <
    V extends Record<string, unknown> | void,
    T extends ResolveQueryDefinitions<RootMutationType>
  >(
    name: string,
    cb: T | ((variables: V) => T)
  ) => (
    request: Requester,
    variables: V,
    {
      cacheQueries,
      includeTypeNames,
    }: { includeTypeNames: boolean; cacheQueries: boolean }
  ) => Promise<ResolveQuery<T, RootMutationType>>;
  createSubscription: <
    V extends Record<string, unknown> | void,
    T extends ResolveQueryDefinitions<RootSubscriptionType>
  >(
    name: string,
    cb: T | ((variables: V) => T)
  ) => (
    subscribe: Subscriber,
    onMessage: (message: T) => void,
    variables: V,
    {
      cacheQueries,
      includeTypeNames,
    }: { includeTypeNames: boolean; cacheQueries: boolean }
  ) => () => void;
} = <
  RootQueryType extends Record<string, unknown>,
  RootMutationType extends Record<string, unknown>,
  RootSubscriptionType extends Record<string, unknown>
>(
  argumentsByField: ArgumentsByField
) => {
  function createQueryArgumentsString(
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

  function isObjectQueryDefinition(
    queryDefinition: QueryDefinition
  ): queryDefinition is ObjectQueryDefinition {
    return Array.isArray(queryDefinition) && queryDefinition.length === 2;
  }

  function isFieldQueryDefinition(
    queryDefinition: QueryDefinition
  ): queryDefinition is FieldQueryDefinition {
    return Array.isArray(queryDefinition) && queryDefinition.length === 1;
  }

  function isAliasQueryDefinition(
    queryDefinition: QueryDefinition
  ): queryDefinition is AliasQueryDefinition {
    return typeof queryDefinition === "object" && "$ALIAS" in queryDefinition;
  }

  function createQueryBodyString(
    QueryDefinitions: QueryDefinitions,
    detectedVariableTypes: DetectedVariableTypes,
    includeTypeNames: boolean,
    level = 1
  ) {
    let string = " {\n";

    if (includeTypeNames) {
      string +=
        "  ".repeat(level) +
        "__typename\n" +
        ("id" in QueryDefinitions ? "" : "id\n");
    }

    for (const field in QueryDefinitions) {
      const value = QueryDefinitions[field];

      if (value === false) {
        continue;
      }

      string += "  ".repeat(level) + field;

      if (value === undefined) {
        // This can not really happen, but due to typing it needs to be handled
        throw new Error("Got an undefined, that should not be possible!");
      }

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

  return {
    createMutation:
      (name, cb) =>
      (request, variables, { cacheQueries, includeTypeNames }) => {
        const query =
          typeof cb === "function"
            ? cb(
                Object.keys(variables || {}).reduce<Record<string, string>>(
                  (aggr, key) => {
                    aggr[key] = "$" + key;

                    return aggr;
                  },
                  {}
                ) as any
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
        ) as any;
      },

    createQuery:
      (name, cb) =>
      (request, variables, { cacheQueries, includeTypeNames }) => {
        const query =
          typeof cb === "function"
            ? cb(
                Object.keys(variables || {}).reduce<Record<string, string>>(
                  (aggr, key) => {
                    aggr[key] = "$" + key;

                    return aggr;
                  },
                  {}
                ) as any
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
        ) as any;
      },

    createSubscription:
      (name, cb) =>
      (subscribe, onMessage, variables, { cacheQueries, includeTypeNames }) => {
        const query =
          typeof cb === "function"
            ? cb(
                Object.keys(variables || {}).reduce<Record<string, string>>(
                  (aggr, key) => {
                    aggr[key] = "$" + key;

                    return aggr;
                  },
                  {}
                ) as any
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
      },
  };
};
