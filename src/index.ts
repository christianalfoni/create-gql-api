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

function getNamedTypeNode(type: GQL.TypeNode): GQL.NamedTypeNode {
  if (type.kind === GQL.Kind.NAMED_TYPE) {
    return type;
  }

  return getNamedTypeNode(type.type);
}

function isListTypeNode(type: GQL.TypeNode): boolean {
  if (type.kind === GQL.Kind.NAMED_TYPE) {
    return false;
  }

  if (type.kind === GQL.Kind.LIST_TYPE) {
    return true;
  }

  return isListTypeNode(type.type);
}

function createValueType(value: string) {
  if (
    value === "String" ||
    value === "UUID4" ||
    value === "ID" ||
    value === "DateTime" ||
    value === "NaiveDateTime" ||
    value === "Base64"
  ) {
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

function createObjectField(field: GQL.FieldDefinitionNode) {
  const isList = isListTypeNode(field.type);

  return `${field.name.value}: {
    type: ${createValueType(getNamedTypeNode(field.type).name.value)};
    isList: ${isList};
    arguments: ${
      field.arguments && field.arguments.length
        ? createArguments(field.arguments)
        : "null;"
    }
  }\n`;
}

function createObjectFields(fields: readonly GQL.FieldDefinitionNode[]) {
  let typeFields = "";

  for (const field of fields) {
    typeFields += `  ${createObjectField(field)}`;
  }

  return typeFields;
}

function createInputField(field: GQL.InputValueDefinitionNode) {
  return `${field.name.value}: ${createValueType(
    getNamedTypeNode(field.type).name.value
  )};\n`;
}

function createInputFields(fields: readonly GQL.InputValueDefinitionNode[]) {
  let typeFields = "";

  for (const field of fields) {
    typeFields += `  ${createInputField(field)}`;
  }

  return typeFields;
}

function createRootObjectType(definition: GQL.ObjectTypeDefinitionNode) {
  return `
export type ${definition.name.value} = {
${definition.fields ? `${createObjectFields(definition.fields)}` : ""}
}
`;
}

function createRootInputType(definition: GQL.InputObjectTypeDefinitionNode) {
  return `
export type ${definition.name.value} = {
${definition.fields ? `${createInputFields(definition.fields)}` : ""}
}
`;
}

function createEnumValue(value: GQL.EnumValueDefinitionNode) {
  return `  ${value.name.value} = "${value.name.value}",\n`;
}

function createEnumValues(values: readonly GQL.EnumValueDefinitionNode[]) {
  let typeValues = "";

  for (const value of values) {
    typeValues += `  ${createEnumValue(value)}`;
  }

  return typeValues;
}

function createRootEnumType(definition: GQL.EnumTypeDefinitionNode) {
  return `
export enum ${definition.name.value} {
${definition.values ? `${createEnumValues(definition.values)}` : ""}
}
`;
}

function createUnionTypes(types: readonly GQL.NamedTypeNode[]) {
  let union = "";

  for (const type of types) {
    union += `  | ${type.name.value}`;
  }

  return union;
}

function createRootUnionType(definition: GQL.UnionTypeDefinitionNode) {
  return `
export type ${definition.name.value} = ${
    definition.types ? createUnionTypes(definition.types) : "never"
  };
`;
}

function createRootTypes(definitions: GQL.DocumentNode["definitions"]) {
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
