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
            $FIELDS: MakeQueryable<T[K]["type"]> | boolean;
          }
      : boolean;
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

type Query = {
  $FIELDS: {
    [key: string]: Query | boolean;
  };
  /*
    $CUSTOM?: {
    [key: string]: {
      $FIELD: string;
      $FIELDS: {
        [key: string]: Query | boolean;
      };
    };
  };
  */
};

type ResolveQuery<T extends Query, Q extends QueryObject> = {
  [K in keyof T["$FIELDS"]]: K extends keyof Q
    ? Q[K] extends { isList: true }
      ? Array<Q[K]["type"]>
      : Q[K]["type"]
    : never;
};

const query = <
  T extends {
    $FIELDS: MakeQueryable<RootQueryType>;
    $CUSTOM?: MakeCustomQueryable<RootQueryType>;
  }
>(
  query: T
): ResolveQuery<T, RootQueryType> => {
  return {} as any;
};

const mip = query({
  $FIELDS: {
    albums: {
      $ARGS: { username: "hey" },
      $FIELDS: {
        id: true,
        sandboxes: {
          $FIELDS: {
            alias: true,
          },
        },
      },
    },
  },
  $CUSTOM: {
    albums2: {
      $FIELD: "albums",
      $ARGS: { username: "23" },
      $FIELDS: {
        id: true,
      },
    },
  },
});
