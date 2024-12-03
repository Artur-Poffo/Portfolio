import { defineField, defineType } from 'sanity'

export const ownerInfoType = defineType({
  name: 'ownerInfo',
  title: 'Owner Info',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descriptionTopics',
      title: 'Description Topics',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'birthDate',
      title: 'Birth Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'object', fields: [{ name: 'platform', type: 'string', title: 'Platform' }, { name: 'url', type: 'string', title: 'URL' }] }],
    }),
  ],
})