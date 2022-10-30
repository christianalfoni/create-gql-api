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

type Props = {
  albumId: string;
};

const meQuery = api.query("Me", ({ albumId }: Props) => ({
  album: [
    {
      albumId,
    },
    {
      id: true,
    },
  ],
}));

meQuery({
  albumId: "123",
}).then(console.log);
