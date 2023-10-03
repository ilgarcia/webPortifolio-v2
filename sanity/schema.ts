import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import workContent from "./schemas/workContent";
import workExperience from "./schemas/workExperience";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import skills from "./schemas/skills";
import portfolio from "./schemas/portfolio";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    skills,
    portfolio,
    category,
    workExperience,
    workContent,
    blockContent,
  ],
};
