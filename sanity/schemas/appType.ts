import { defineField, defineType } from "sanity";

export default defineType({
  name: "appType",
  title: "App Type",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
