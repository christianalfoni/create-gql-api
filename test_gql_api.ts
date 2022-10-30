import axios from "axios";
import { createApi, GitProvider } from "./gql_api";

const api = createApi((query, variables) => {
  console.log(query, variables);
  return Promise.resolve();
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

type Props = {
  gitProvider: GitProvider;
  owner: string;
  repo: string;
};

const meQuery = api.query("Me", ({ gitProvider, owner, repo }: Props) => ({
  project: [
    { gitProvider, owner, repo },
    {
      owner: true,
    },
  ],
  project2: {
    $ALIAS: "project",
    $QUERY: [
      { gitProvider, owner, repo },
      {
        appInstalled: true,
      },
    ],
  },
}));

meQuery({
  gitProvider: GitProvider.GITHUB,
  owner: "codesandbox",
  repo: "test-sandbox",
}).then(console.log);
