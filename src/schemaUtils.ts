import * as GQL from "graphql";

export function getNamedTypeNode(type: GQL.TypeNode): GQL.NamedTypeNode {
  if (type.kind === GQL.Kind.NAMED_TYPE) {
    return type;
  }

  return getNamedTypeNode(type.type);
}

export function isListTypeNode(type: GQL.TypeNode): boolean {
  if (type.kind === GQL.Kind.NAMED_TYPE) {
    return false;
  }

  if (type.kind === GQL.Kind.LIST_TYPE) {
    return true;
  }

  return isListTypeNode(type.type);
}

export function isNonNullType(type: GQL.TypeNode): boolean {
  if (type.kind === GQL.Kind.NAMED_TYPE) {
    return false;
  }

  if (type.kind === GQL.Kind.NON_NULL_TYPE) {
    return true;
  }

  return isListTypeNode(type.type);
}
