import { defineField, defineType } from 'sanity'

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
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
      name: 'icon',
      title: 'Icon',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'resourceGroup',
      title: 'Resource Group',
      type: 'reference',
      to: [{ type: 'resourceGroup' }],
      options: {
        filter: 'resourceType == "skill"',
      },
      validation: (rule) => rule.required(),
    }),
  ],
})