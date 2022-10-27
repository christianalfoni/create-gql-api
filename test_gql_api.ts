import { createQueryApi } from "./gql_api";

const createQuery = createQueryApi(() => Promise.resolve());

const queryMe = createQuery("CurrentUser", () => ({
  me: {},
}));

queryMe().then((resp) => {});
