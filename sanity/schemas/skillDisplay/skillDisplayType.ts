import { defineField, defineType } from "sanity";

import {SkillDisplayItem} from './skillDisplayItem'

export const skillDisplayType = defineType({
  name: "skillDisplay",
  title: "Skill Display",
  type: "object",
  fields: [
    defineField({
      name: "skill",
      type: "reference",
      to: [{ type: "skill" }],
    }),
    defineField({
      name: "featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "skill.title",
      featured: "featured",
    },
    prepare: ({ title }) => ({
      title: title
    }),
  },
  components: {item: SkillDisplayItem},
});
