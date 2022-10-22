#!/bin/bash
import { execSync } from "child_process";
const url = process.argv[2];
const pathToGetGqlSchema = require.resolve("get-graphql-schema/dist/index.js");
import * as GQL from "graphql";
import * as fs from "fs";
import * as path from "path";

const result = execSync(`node ${pathToGetGqlSchema} ${url}`);

const schema = GQL.parse(String(result));

function createObjectTypeDefinitionLookup(
  definitions: GQL.DocumentNode["definitions"]
) {
  const lookup: Record<string, GQL.ObjectTypeDefinitionNode> = {};

  for (const definition of definitions) {
    if (definition.kind === "ObjectTypeDefinition") {
      lookup[definition.name.value] = definition;
    }
  }

  return lookup;
}

const lookup = createObjectTypeDefinitionLookup(schema.definitions);

function createValueType(value: string) {
  if (value === "String" || value === "UUID4" || "ID") {
    return "string";
  }

  if (value === "Boolean") {
    return "boolean";
  }

  if (value === "Int") {
    return "number";
  }

  return value;
}

function getNamedTypeNode(type: GQL.TypeNode): GQL.NamedTypeNode {
  if (type.kind === GQL.Kind.NAMED_TYPE) {
    return type;
  }

  return getNamedTypeNode(type.type);
}

function createArgument(arg: GQL.InputValueDefinitionNode) {
  return `  ${arg.name.value}: ${createValueType(
    getNamedTypeNode(arg.type).name.value
  )}`;
}

function createArguments(args: readonly GQL.InputValueDefinitionNode[]) {
  let argsType = "{\n";
  for (const arg of args) {
    argsType += `    ${createArgument(arg)};\n`;
  }
  return argsType + "    }\n";
}

function createField(field: GQL.FieldDefinitionNode) {
  return `${field.name.value}: {
    type: ${createValueType(getNamedTypeNode(field.type).name.value)};
    arguments: ${
      field.arguments && field.arguments.length
        ? createArguments(field.arguments)
        : "null;"
    }
  }\n`;
}

function createFields(fields: readonly GQL.FieldDefinitionNode[]) {
  let typeFields = "";

  for (const field of fields) {
    typeFields += `  ${createField(field)}`;
  }

  return typeFields;
}

function createRootType(definition: GQL.ObjectTypeDefinitionNode) {
  return `
export type ${definition.name.value} = {
${definition.fields ? `${createFields(definition.fields)}` : ""}
}
`;
}

function createRootTypes(definitions: GQL.DocumentNode["definitions"]) {
  let types = "";

  for (const definition of definitions) {
    if (definition.kind === "ObjectTypeDefinition") {
      types += createRootType(definition);
    }
  }

  return types;
}

fs.writeFileSync(
  path.join(process.cwd(), "test.ts"),
  createRootTypes(schema.definitions)
);

// console.log(lookup.RootQueryType.fields[0].arguments[0].type);

// Produce TS types out of going through definitions, using lookup
// Entry point "lookup.RootQueryType"

/**
 
 type SomeFieldType {
   fields: {}
   arguments: {} | null
   
 } 
 
  
 querySomething({}, {
   fieldA: true,
   fieldB: [{}],
   fieldC: [{}, {}],
   customField: ['fieldC', {}, {}]
 })
 */
