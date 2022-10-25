"use strict";

// test-consumption.ts
function createQueryString(query, level = 1) {
  let string = "";
  if (query.$ARGS) {
    const args = query.$ARGS;
    string += `(${Object.keys(args).reduce((aggr, key) => {
      return aggr + `${key}: ${args[key]}`;
    }, "")}) {
`;
  } else {
    string += "{\n";
  }
  for (const field in query.$FIELDS) {
    const value = query.$FIELDS[field];
    if (value === true) {
      string += "  ".repeat(level) + field + "\n";
    } else if (value) {
      string += "  ".repeat(level) + field + " " + createQueryString(value, level + 1);
    }
  }
  for (const field in query.$CUSTOM) {
    const value = query.$CUSTOM[field];
    if (value) {
      string += "  ".repeat(level) + field + " " + createQueryString(value, level + 1);
    }
  }
  string += "  ".repeat(level - 1) + "}\n";
  return string;
}
var createQueryApi = (request) => (name, cb) => (variables) => {
  const query = cb(
    Object.keys(variables).reduce((aggr, key) => {
      aggr[key] = "$" + key.toUpperCase();
      return aggr;
    }, {})
  );
  return request(
    `query ${name} (${Object.keys(variables).map((key) => "$" + key.toUpperCase()).join(", ")}) ${createQueryString(query)}`,
    Object.keys(variables).reduce((aggr, key) => {
      aggr["$" + key.toUpperCase()] = variables[key];
      return aggr;
    }, {})
  );
};
var createQuery = createQueryApi((query, variables) => {
  console.log(query, variables);
  return Promise.resolve();
});
var queryAlbums = createQuery("Albums", (props) => ({
  $FIELDS: {
    albums: {
      $ARGS: {
        username: props.username
      },
      $FIELDS: {
        sandboxes: {
          $FIELDS: {
            alias: true
          },
          $CUSTOM: {
            collabs: {
              $FIELD: "team",
              $FIELDS: {
                id: true
              }
            }
          }
        }
      }
    }
  },
  $CUSTOM: {
    albums2: {
      $FIELD: "albums",
      $ARGS: { username: props.username },
      $FIELDS: {
        id: true
      }
    }
  }
}));
async function test() {
  const test2 = await queryAlbums({ username: "" });
}
test();
