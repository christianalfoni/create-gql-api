import { createQueryApi } from "./gql_api";

const createQuery = createQueryApi(() => Promise.resolve());

const meQuery = createQuery("Me", () => ({
  sandbox: [
    { sandboxId: "" },
    {
      id: true,
    },
  ],
}));
