import axios from "axios";
import { createQuery, createClient } from "./gql_api";

const client = createClient({
  onRequest: (query, variables) => {
    console.log(query, variables);

    return axios
      .post(
        "https://codesandbox.stream/api/graphql",
        {
          query,
          variables,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(({ data }) => data);
  },
  onSubscribe: () => () => {},
  cacheQueries: true,
  includeTypeNames: true,
});

const querySandbox = createQuery("SomeQuery", ({ id }: { id: string }) => ({
  project: [{
    
  }]
}));

const resp = client.query(querySandbox, { id: "new" });

resp.then((data) => console.log(data));
