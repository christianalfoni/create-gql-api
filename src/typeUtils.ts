import * as GQL from "graphql";
import { getNamedTypeNode, isListTypeNode, isNonNullType } from "./schemaUtils";
import { ArgumentsByField } from "./types";

export const argumentsByField: ArgumentsByField = {};

export function createValueType(value: string) {
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

export function createInputValues(
  name: string,
  field: string,
  args: readonly GQL.InputValueDefinitionNode[]
) {
  let string = "{\n";

  if (name === "RootMutationType" || name === "RootSubscriptionType") {
    string += args
      .map(
        (arg) =>
          `    ${arg.name.value}: ${createValueType(
            getNamedTypeNode(arg.type).name.value
          )}`
      )
      .join("\n");
  } else {
    argumentsByField[field] = {};

    for (const arg of args) {
      argumentsByField[field][arg.name.value] = {
        isNonNull: isNonNullType(arg.type),
        type: getNamedTypeNode(arg.type).name.value,
        // Implement default value
      };

      string += `    ${arg.name.value}: ${createValueType(
        getNamedTypeNode(arg.type).name.value
      )}`;

      if (arg !== args[args.length - 1]) {
        string += "\n";
      }
    }
  }

  return string + "\n  }";
}

export function createObjectTypeKey(
  name: string,
  field: GQL.FieldDefinitionNode
) {
  const isList = isListTypeNode(field.type);

  if (isList && field.arguments && field.arguments.length) {
    return `${field.name.value}: ListQuery<${createInputValues(
      name,
      field.name.value,
      field.arguments
    )}, ${createValueType(getNamedTypeNode(field.type).name.value)}>`;
  }

  if (isList) {
    return `${field.name.value}: ${createValueType(
      getNamedTypeNode(field.type).name.value
    )}[]`;
  }

  if (field.arguments && field.arguments.length) {
    return `${field.name.value}: FieldQuery<${createInputValues(
      name,
      field.name.value,
      field.arguments
    )}, ${createValueType(getNamedTypeNode(field.type).name.value)}>`;
  }

  return `${field.name.value}: ${createValueType(
    getNamedTypeNode(field.type).name.value
  )}`;
}

export function createObjectType(definition: GQL.ObjectTypeDefinitionNode) {
  if (!definition.fields) {
    return `export type ${definition.name.value} {}`;
  }

  let string = `export type ${definition.name.value} = {\n`;

  string += definition.fields
    .map((field) => `  ${createObjectTypeKey(definition.name.value, field)}`)
    .join("\n");

  return string + "\n}\n";
}

export function createInputObjectType(
  definition: GQL.InputObjectTypeDefinitionNode
) {
  if (!definition.fields) {
    return `export type ${definition.name.value} = {}`;
  }

  let string = `export type ${definition.name.value} = {\n`;

  string += definition.fields
    .map(
      (field) =>
        `  ${field.name.value}: ${createValueType(
          getNamedTypeNode(field.type).name.value
        )};`
    )
    .join("\n");

  return string + "\n}\n";
}

export function createEnumType(definition: GQL.EnumTypeDefinitionNode) {
  if (!definition.values) {
    return `export enum ${definition.name.value} {}`;
  }

  let string = `export enum ${definition.name.value} {\n`;

  string += definition.values
    .map((value) => `  ${value.name.value} = "${value.name.value}"`)
    .join(",\n");

  return string + "\n}\n";
}

export function createUnionType(definition: GQL.UnionTypeDefinitionNode) {
  return `
export type ${definition.name.value} = ${
    definition.types
      ? definition.types.map((type) => type.name.value).join(" | ")
      : "never"
  };\n
`;
}

export function createTypes(definitions: GQL.DocumentNode["definitions"]) {
  let types = "";

  const scalarTypeDefinitions: GQL.ScalarTypeDefinitionNode[] = [];
  const objectTypes = new Set<string>();

  for (const definition of definitions) {
    if (definition.kind === GQL.Kind.SCALAR_TYPE_DEFINITION) {
      scalarTypeDefinitions.push(definition);
      continue;
    }
    if (definition.kind === GQL.Kind.OBJECT_TYPE_DEFINITION) {
      types += createObjectType(definition);
      objectTypes.add(definition.name.value);
      continue;
    }
    if (definition.kind === GQL.Kind.INPUT_OBJECT_TYPE_DEFINITION) {
      types += createInputObjectType(definition);
      continue;
    }
    if (definition.kind === GQL.Kind.ENUM_TYPE_DEFINITION) {
      types += createEnumType(definition);
      continue;
    }
    if (definition.kind === GQL.Kind.UNION_TYPE_DEFINITION) {
      types += createUnionType(definition);
      continue;
    }
  }

  types += "export type ObjectTypes = {\n";

  objectTypes.forEach((type) => {
    types += `  ${type}: ${type};\n`;
  });

  types += "}";

  return types;
}
