import { defineField, defineType } from "sanity";

import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";

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
      description:
        "Name of react-icon icon to use: https://react-icons.github.io/react-icons/ . Not used externally.",
    }),
    defineField({
      name: "display",
      title: "Display",
      type: "boolean",
    }),
  ],
  preview: {
    select: {
      title: "title",
      icon: "icon",
    },
    prepare({ title, icon }) {
      // what happens if  icons[iconName] returns undefined? :/
      return {
        title,
        media: icon ,
        // media: icon ? Si[icon as keyof typeof Si] : "teste",
      };
    },
  },
});
