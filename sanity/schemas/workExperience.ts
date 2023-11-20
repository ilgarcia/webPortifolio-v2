import { defineField, defineType } from "sanity";

export default defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "startedAt",
      title: "Started at",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
    }),
    defineField({
      name: "endedAt",
      title: "Ended at",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "workContent",
    }),
    defineField({
      name: "display",
      title: "Display",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
