import { type SchemaTypeDefinition } from "sanity";
import { ownerInfoType } from "./ownerInfo";
import { skillType } from "./skill";
import { projectType } from "./project";
import { resourceGroupType } from "./resourceGroup";
import { experienceType } from "./experience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ownerInfoType,
    projectType,
    skillType,
    resourceGroupType,
    experienceType,
  ],
};
