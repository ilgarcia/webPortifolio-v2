import { type SchemaTypeDefinition } from "sanity";

import blogContent from "./schemas/blockBlogContent";
import workContent from "./schemas/blockWorkContent";
import workExperience from "./schemas/workExperience";
import appType from "./schemas/appType";
import skill from "./schemas/skill";
import portfolio from "./schemas/portfolio";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    skill,
    portfolio,
    appType,
    workExperience,
    workContent,
    blogContent,
  ],
};
