import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "description",
      description: "Enter a short snippet for the blog...",
      title: "Description",
      rows: 2,
      type: "text",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blogContent",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
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
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "post" } })],
    }),
    defineField({
      name: "portfolio",
      title: "Portfolio Reference",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "portfolio" } })],
    }),
  ],

  // preview: {
  //   select: {
  //     title: "title",
  //     author: "author.name",
  //     media: "mainImage",
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return { ...selection, subtitle: author && `by ${author}` };
  //   },
  // },
});
