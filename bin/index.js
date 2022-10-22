#!/bin/bash
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_child_process = require("child_process");
var GQL = __toESM(require("../node_modules/graphql/index.js"));
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
var url = process.argv[2];
var pathToGetGqlSchema = require.resolve("../node_modules/get-graphql-schema/dist/index.js");
var result = (0, import_child_process.execSync)(`node ${pathToGetGqlSchema} ${url}`);
var schema = GQL.parse(String(result));
function createObjectTypeDefinitionLookup(definitions) {
  const lookup2 = {};
  for (const definition of definitions) {
    if (definition.kind === "ObjectTypeDefinition") {
      lookup2[definition.name.value] = definition;
    }
  }
  return lookup2;
}
var lookup = createObjectTypeDefinitionLookup(schema.definitions);
function createValueType(value) {
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
function getNamedTypeNode(type) {
  if (type.kind === GQL.Kind.NAMED_TYPE) {
    return type;
  }
  return getNamedTypeNode(type.type);
}
function createArgument(arg) {
  return `  ${arg.name.value}: ${createValueType(
    getNamedTypeNode(arg.type).name.value
  )}`;
}
function createArguments(args) {
  let argsType = "{\n";
  for (const arg of args) {
    argsType += `    ${createArgument(arg)};
`;
  }
  return argsType + "    }\n";
}
function createField(field) {
  return `${field.name.value}: {
    type: ${createValueType(getNamedTypeNode(field.type).name.value)};
    arguments: ${field.arguments && field.arguments.length ? createArguments(field.arguments) : "null;"}
  }
`;
}
function createFields(fields) {
  let typeFields = "";
  for (const field of fields) {
    typeFields += `  ${createField(field)}`;
  }
  return typeFields;
}
function createRootType(definition) {
  return `
export type ${definition.name.value} = {
${definition.fields ? `${createFields(definition.fields)}` : ""}
}
`;
}
function createRootTypes(definitions) {
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
