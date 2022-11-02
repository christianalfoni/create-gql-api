import axios from "axios";
import { createApi, GitProvider } from "./gql_api";

const api = createApi((query, variables) => {
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

const querySandbox = api.createQuery("SomeQuery", {
  sandbox: [
    { sandboxId: "new" },
    {
      title: true,
      description: true,
      author: {
        name: true,
      },
    },
  ],
});

querySandbox();
