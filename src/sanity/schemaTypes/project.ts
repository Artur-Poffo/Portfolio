import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "url", type: "url", title: "URL" },
          ],
        },
      ],
    }),
    defineField({
      name: "resourceGroup",
      title: "Resource Group",
      type: "reference",
      to: [{ type: "resourceGroup" }],
      options: {
        filter: 'resourceType == "project"',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isPinned",
      title: "Is Pinned",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
