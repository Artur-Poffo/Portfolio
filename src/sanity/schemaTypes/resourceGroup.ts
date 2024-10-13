import { defineField, defineType } from 'sanity'

export const resourceGroupType = defineType({
  name: 'resourceGroup',
  title: 'Resource Group',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Skill', value: 'skill' },
          { title: 'Project', value: 'project' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
})