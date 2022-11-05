# create-gql-api
Simplify GQL typing and consumption

## Get Started

```sh
npx create-gql-api https://example.domain/graphql gql_api.ts
```

This generates a `gql_api.ts` file in your project.

```ts
import { createRequester, createSubscriber, createQuery, createMutation, createSubscription } from './gql_api.ts'

const query = createRequester(
    (query, variables) => {
        // Implement the GraphQL POST request with the
        // query, variables and any authentication you use
        // for your app
        return new Promise(() => {})
    }
)

const subscribe = createSubscriber(
    (query, variables, onMessage) => {
        // Optionally implement subscription handling
        // Call "onMessage" with new data
        // Return a disposer
        return () => {}
    }
)

// Create a query by giving it a name and what fields to include
export const queryFoo = createQuery("Foo", {
    foo: {
        name: true,
        email: true
    }
})
query(queryFoo)

// Query on simple values
export const queryBar = api.createQuery("Bar", {
    bar: [{ unit: 'FOOTER' }]
})
query(queryBar)

// Query on object and lists
export const queryBaz = api.createQuery("Baz", {
    baz: [{ id: '123' }, {
        id: true
    }]
})
query(queryBaz)

// Query with variables
export const queryBazWithVars = createQuery("BazWithVars", (vars: { id: string }) => ({
    baz: [{ id: vars.id }, {
        id: true
    }]
}))
query(queryBazWithVars, { id: '123' })

// Mutations works like queries
export const mutateSomething = createMutation("Something", () => ({
    something: [{}]
}))
query(mutateSomething)

// Subscriptions 
export const subscribeSomething = createSubscription("Something", (vars: { id: string }) => ({
    something: [{ id: vars.id }]
}))
subscribe(subscribeSomething, (data) => {
    // Handle the data
}, { id: '123' }) // Returns disposer
```
