export type ArgumentsByField = Record<
  string,
  Record<
    string,
    {
      isNonNull: boolean;
      type: string;
      defaultValue?: string;
    }
  >
>;

export type FieldQuery<A extends Record<string, unknown>, T> = T & { __: A };

export type ListQuery<
  A extends Record<string, unknown>,
  T extends Record<string, unknown>
> = Array<T> & { __: A };

export type ObjectQueryDefinition = [
  Record<string, unknown>,
  QueryDefinitions,
  ...never[]
];

export type FieldQueryDefinition = [Record<string, unknown>, ...never[]];

export type AliasQueryDefinition = {
  $ALIAS: string;
  $QUERY: ObjectQueryDefinition | FieldQueryDefinition;
};

export type QueryDefinition =
  | boolean
  | ObjectQueryDefinition
  | FieldQueryDefinition
  | AliasQueryDefinition
  | QueryDefinitions;

export type QueryDefinitions = {
  [key: string]: QueryDefinition | undefined;
};

export type ResolveQueryDefinitions<T extends Record<string, unknown>> =
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

export type ResolveQuery<
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

export type DetectedVariableTypes = Record<
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

export type Query = (
  request: Requester,
  variables: any,
  options: { includeTypeNames: boolean; cacheQueries: boolean }
) => Promise<Record<string, unknown>>;

export type Subscription = (
  subscribe: Subscriber,
  onMessage: (message: unknown) => void,
  variables: any,
  options: { includeTypeNames: boolean; cacheQueries: boolean }
) => () => void;
