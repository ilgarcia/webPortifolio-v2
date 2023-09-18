import { defineField, defineType } from "sanity";

export default defineType({
  name: "portfolios",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "githubLink",
      title: "Github Link",
      type: "string",
    }),
    defineField({
      name: "externalLink",
      title: "External Link",
      type: "string",
    }),
    defineField({
      name: "blogLink",
      title: "Blog Link",
      type: "string",
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
  ],
});
