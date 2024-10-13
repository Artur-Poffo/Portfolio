import { type SchemaTypeDefinition } from 'sanity'
import { ownerInfoType } from './ownerInfo'
import { skillType } from './skill'
import { projectType } from './project'
import { resourceGroupType } from './resourceGroup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ownerInfoType,
    projectType,
    skillType,
    resourceGroupType,
  ],
}
