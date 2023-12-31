import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
    }),
    defineField({
      name: "display",
      title: "Display",
      type: "boolean",
    }),
  ],
});
