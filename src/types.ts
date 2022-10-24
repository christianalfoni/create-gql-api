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
