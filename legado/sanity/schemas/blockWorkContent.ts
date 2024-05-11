import { defineType, defineArrayMember } from "sanity";

export default defineType({
  title: "Work Content",
  name: "workContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
      },
    }),
  ],
});
