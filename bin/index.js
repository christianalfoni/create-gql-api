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
function getNamedTypeNode(type) {
  if (type.kind === GQL.Kind.NAMED_TYPE) {
    return type;
  }
  return getNamedTypeNode(type.type);
}
function isListTypeNode(type) {
  if (type.kind === GQL.Kind.NAMED_TYPE) {
    return false;
  }
  if (type.kind === GQL.Kind.LIST_TYPE) {
    return true;
  }
  return isListTypeNode(type.type);
}
function createValueType(value) {
  if (value === "String" || value === "UUID4" || value === "ID" || value === "DateTime" || value === "NaiveDateTime" || value === "Base64") {
    return "string";
  }
  if (value === "Boolean") {
    return "boolean";
  }
  if (value === "Int" || value === "Float") {
    return "number";
  }
  return value;
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
function createObjectField(field) {
  const isList = isListTypeNode(field.type);
  return `${field.name.value}: {
    type: ${createValueType(getNamedTypeNode(field.type).name.value)};
    isList: ${isList};
    arguments: ${field.arguments && field.arguments.length ? createArguments(field.arguments) : "null;"}
  }
`;
}
function createObjectFields(fields) {
  let typeFields = "";
  for (const field of fields) {
    typeFields += `  ${createObjectField(field)}`;
  }
  return typeFields;
}
function createInputField(field) {
  return `${field.name.value}: ${createValueType(
    getNamedTypeNode(field.type).name.value
  )};
`;
}
function createInputFields(fields) {
  let typeFields = "";
  for (const field of fields) {
    typeFields += `  ${createInputField(field)}`;
  }
  return typeFields;
}
function createRootObjectType(definition) {
  return `
export type ${definition.name.value} = {
${definition.fields ? `${createObjectFields(definition.fields)}` : ""}
}
`;
}
function createRootInputType(definition) {
  return `
export type ${definition.name.value} = {
${definition.fields ? `${createInputFields(definition.fields)}` : ""}
}
`;
}
function createEnumValue(value) {
  return `  ${value.name.value} = "${value.name.value}",
`;
}
function createEnumValues(values) {
  let typeValues = "";
  for (const value of values) {
    typeValues += `  ${createEnumValue(value)}`;
  }
  return typeValues;
}
function createRootEnumType(definition) {
  return `
export enum ${definition.name.value} {
${definition.values ? `${createEnumValues(definition.values)}` : ""}
}
`;
}
function createUnionTypes(types) {
  let union = "";
  for (const type of types) {
    union += `  | ${type.name.value}`;
  }
  return union;
}
function createRootUnionType(definition) {
  return `
export type ${definition.name.value} = ${definition.types ? createUnionTypes(definition.types) : "never"};
`;
}
function createRootTypes(definitions) {
  let types = "";
  for (const definition of definitions) {
    if (definition.kind === GQL.Kind.OBJECT_TYPE_DEFINITION) {
      types += createRootObjectType(definition);
      continue;
    }
    if (definition.kind === GQL.Kind.INPUT_OBJECT_TYPE_DEFINITION) {
      types += createRootInputType(definition);
      continue;
    }
    if (definition.kind === GQL.Kind.ENUM_TYPE_DEFINITION) {
      types += createRootEnumType(definition);
      continue;
    }
    if (definition.kind === GQL.Kind.UNION_TYPE_DEFINITION) {
      types += createRootUnionType(definition);
      continue;
    }
  }
  return types;
}
fs.writeFileSync(
  path.join(process.cwd(), "gql_api.ts"),
  `${createRootTypes(schema.definitions)}
${fs.readFileSync(path.join(__dirname, "api.ts")).toString()}`
);
