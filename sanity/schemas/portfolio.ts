import { defineArrayMember, defineField, defineType } from "sanity";

import { client } from "../lib/client";

const getSkills = async () => {
  const query = '*[_type=="portfolio" && display == true]';
  const skillsObject = await client.fetch(query);
  if (skillsObject) {
    return skillsObject;
  }
};

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
      name: "appType",
      title: "App Type",
      type: "reference",
      to: [{ type: "appType" }],
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(56),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().max(110),
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "skills" } })],
    }),

    defineField({
      name: "post",
      title: "Post Reference",
      type: "reference",
      to: [{ type: "post" }],
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
      name: "display",
      title: "Display",
      type: "boolean",
      initialValue: false,
      validation: (Rule) =>
        Rule.required().custom(async (value) => {
          const data = await getSkills();
          if (data.length < 2 || !value) {
            return true;
          } else {
            return "Deu errado";
          }
        }),
    }),
  ],
});
