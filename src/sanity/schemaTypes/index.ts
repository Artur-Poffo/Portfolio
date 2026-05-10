import { type SchemaTypeDefinition } from "sanity";
import { ownerInfoType } from "./ownerInfo";
import { experienceType } from "./experience";
import { selectedWorkType } from "./selectedWork";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ownerInfoType,
    experienceType,
    selectedWorkType,
  ],
};
