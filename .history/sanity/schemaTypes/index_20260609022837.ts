import { type SchemaTypeDefinition } from "sanity";
import { location } from "../schemas/location";
import { transaction } from "../schemas/transaction";
import { propertyType } from "../schemas/propertyType";
import { property } from "../schemas/property";
import { agent } from "../schemas/agent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [location, transaction, propertyType, property],
};
