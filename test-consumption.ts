import { Album, RootQueryType, Sandbox } from "./test";

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
              $CUSTOM?: MakeCustomQueryable<T[K]["type"]>;
            }
          :
              | boolean
              | {
                  $FIELDS: MakeQueryable<T[K]["type"]>;
                  $CUSTOM?: MakeCustomQueryable<T[K]["type"]>;
                }
        : boolean;
    };

type CustomQuery = {
  $FIELD: string;
  $FIELDS: {
    [key: string]: Query | boolean;
  };
};

type Query = {
  $FIELDS: {
    [key: string]: Query | boolean;
  };
  $CUSTOM?: {
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
  [K in keyof T["$CUSTOM"]]: T["$CUSTOM"][K] extends CustomQuery
    ? T["$CUSTOM"][K]["$FIELD"] extends keyof Q
      ? Q[T["$CUSTOM"][K]["$FIELD"]] extends { isList: true }
        ? Array<
            ResolveQueryField<
              T["$FIELDS"][T["$CUSTOM"][K]["$FIELD"]],
              Q[T["$CUSTOM"][K]["$FIELD"]]["type"]
            >
          >
        : ResolveQueryField<
            T["$FIELDS"][T["$CUSTOM"][K]["$FIELD"]],
            Q[T["$CUSTOM"][K]["$FIELD"]]["type"]
          >
      : never
    : never;
};

const createQuery =
  (request: (query: string) => Promise<unknown>) =>
  <
    T extends {
      $FIELDS: MakeQueryable<RootQueryType>;
      $CUSTOM?: MakeCustomQueryable<RootQueryType>;
    }
  >(
    query: T
  ): Promise<ResolveQuery<T, RootQueryType>> => {
    return {} as any;
  };

const query = createQuery(() => Promise.resolve());

const response = query({
  $FIELDS: {
    albums: {
      $ARGS: {
        username: "",
      },
      $FIELDS: {
        sandboxes: {
          $FIELDS: {
            alias: true,
          },
          $CUSTOM: {
            collabs: {
              $FIELD: "team",
              $FIELDS: {
                id: true,
              },
            },
          },
        },
      },
    },
  },
  $CUSTOM: {
    albums2: {
      $FIELD: "albums",
      $ARGS: { username: "" },
      $FIELDS: {
        id: true,
      },
    },
  },
});

response.then((resp) => {
  resp.albums[0].sandboxes[0];
});
