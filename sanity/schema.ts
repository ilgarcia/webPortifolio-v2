import { type SchemaTypeDefinition } from "sanity";

import blogContent from "./schemas/blockBlogContent";
import workContent from "./schemas/blockWorkContent";
import workExperience from "./schemas/workExperience";
import appType from "./schemas/appType";
import skill from "./schemas/skill";
import post from "./schemas/post";
import portfolio from "./schemas/portfolio";
import category from "./schemas/category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    skill,
    category,
    post,
    portfolio,
    appType,
    workExperience,
    workContent,
    blogContent,
  ],
};
