#!/usr/bin/env node
import { execSync } from "child_process";
import * as GQL from "graphql";
import * as fs from "fs";
import * as path from "path";
import { argumentsByField, createTypes } from "./typeUtils";

const url = process.argv[2];
const out = process.argv[3];
const pathToGetGqlSchema = require.resolve("get-graphql-schema/dist/index.js");
const schemaString = execSync(`node ${pathToGetGqlSchema} ${url}`);
const schema = GQL.parse(String(schemaString));

fs.writeFileSync(
  path.join(process.cwd(), out),
  `import { createClient, createQueryUtils } from 'create-gql-api';
import type { ListQuery, FieldQuery, Query, ListField } from 'create-gql-api';
${createTypes(schema.definitions)}
const { createQuery, createMutation, createSubscription } = createQueryUtils<RootQueryType, RootMutationType, RootSubscriptionType>(${JSON.stringify(
    // This is a global which is populated by "createTypes"
    argumentsByField,
    null,
    2
  )});
export { createQuery, createMutation, createSubscription, createClient, Query };
`
);
