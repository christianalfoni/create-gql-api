#!/usr/bin/env node
import { execSync } from "child_process";
const url = process.argv[2];
const pathToGetGqlSchema = require.resolve("get-graphql-schema/dist/index.js");
import * as GQL from "graphql";
import * as fs from "fs";
import * as path from "path";
import { createTypes } from "./typeUtils";

const schemaString = execSync(`node ${pathToGetGqlSchema} ${url}`);

const schema = GQL.parse(String(schemaString));

fs.writeFileSync(
  path.join(process.cwd(), "gql_api.ts"),
  `${createTypes(schema.definitions)}
${fs.readFileSync(path.join(__dirname, "api.ts")).toString()}`
);
