import { defineField, defineType } from "sanity";

export const selectedWorkType = defineType({
  name: "selectedWork",
  title: "Selected Work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "reference",
      to: [{ type: "experience" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "context",
      title: "Context",
      type: "text",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "technicalFocus",
      title: "Technical Focus",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      type: "text",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "isFeatured",
      title: "Featured",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "context",
    },
  },
});
