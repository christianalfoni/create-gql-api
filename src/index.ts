#!/usr/bin/env node
import { execSync } from "child_process";
const url = process.argv[2];
const pathToGetGqlSchema = require.resolve("get-graphql-schema/dist/index.js");
import * as GQL from "graphql";
import * as fs from "fs";
import * as path from "path";
import { argumentsByField, createTypes } from "./typeUtils";

const schemaString = execSync(`node ${pathToGetGqlSchema} ${url}`);

const schema = GQL.parse(String(schemaString));

fs.writeFileSync(
  path.join(process.cwd(), "gql_api.ts"),
  `${createTypes(schema.definitions)}
const argumentsByField = ${JSON.stringify(argumentsByField, null, 2)};
${fs.readFileSync(path.join(__dirname, "api.ts")).toString()}`
);
