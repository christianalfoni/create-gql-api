import axios from "axios";
import { createQuery, createRequester } from "./gql_api";

const query = createRequester((query, variables) => {
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
});

const querySandbox = createQuery("SomeQuery", ({ id }: { id: string }) => ({
  sandbox: [
    { sandboxId: id },
    {
      title: true,
      description: true,
      author: {
        name: true,
      },
    },
  ],
}));

const resp = query(querySandbox, { id: "123" });

resp.then(data => data.sandbox.author.)
