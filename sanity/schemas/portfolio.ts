import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  validation: (Rule) =>
    Rule.custom((fields) => {
      console.log(fields?.display);
      return true;
    }),
  fields: [
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
        }),
      ],
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(56),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "appType",
      title: "App Type",
      type: "reference",
      to: [{ type: "appType" }],
    }),
    // defineField({
    //   name: "skill",
    //   title: "Skill Reference",
    //   type: "array",
    //   of: [defineArrayMember({ type: "reference", to: { type: "skill" } })],
    // }),
    defineField({
      name: "skill",
      title: "Skill Reference",
      type: "array",
      of: [{ type: "skillDisplay" }],
    }),
    defineField({
      name: "githubLink",
      title: "Github Link",
      type: "url",
    }),
    defineField({
      name: "externalLink",
      title: "External Link",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description",
      rows: 2,
      type: "text",
      validation: (Rule) => Rule.required().max(110),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blogContent",
    }),
    defineField({
      name: "display",
      title: "Display",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
