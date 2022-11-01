# create-gql-api
Simplify GQL typing and consumption

## Get Started

```sh
npx create-gql-api https://example.domain/graphql gql_api.ts
```

This generates a `gql_api.ts` file in your project.

```ts
import { createApi } from './gql_api.ts'

const api = createApi(
    (query, variables) => {
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
    },
    (query, variables, onMessage) => {
        // Optionally implement subscription handling
        // Call "onMessage" with new data
        // Return a disposer
        return () => {}
    }
)

// Create a query by giving it a name and what fields to include
export const queryCurrentUser = api.query("CurrentUser", {
    me: {
        name: true,
        email: true
    }
})

// Query on single fields
export const queryAlbum = api.query("CurrentUser", {
    album: [{ albumId: '123' }, {
        title: true
    }]
})
```
