# create-gql-api
Simplify GQL typing and consumption

## Get Started

```sh
npx create-gql-api https://example.domain/graphql gql_api.ts
```

This generates a `gql_api.ts` file in your project.

```ts
import { createApi } from './gql_api.ts'

const api = createApi((query, variables) => {
    // Implement the GraphQL POST request with the
    // query, variables and any authentication you use
    // for your app
    return fetch('https://example.domain/graphql', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query, variables })
    })
        .then((response) => response.json())
        .then(({ data, errors }) => {
            if (errors) {
                throw errors
            }
          
            return data
        })
})


export const queryCurrentUser = () => api.query("CurrentUser", {
    me: {
        name: true,
        email: true
    }
})
```
