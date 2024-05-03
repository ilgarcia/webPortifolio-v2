type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Portfolio extends Base {
  mainImage: Image;
  title: string;
  slug: Slug;
  appType: AppType;
  skill: Skill[];
  githubLink?: string;
  externalLink?: string;
  description: string;
  body: Block[];
  display: boolean;
}

interface AppType extends Base {
  title: string;
}

interface Skill extends Base {
  title: string;
  icon: string;
  display: boolean;
  media: string;
}

interface WorkExperience extends Base {
  title: string;
  company: string;
  startedAt: string;
  endedAt: string;
  display: boolean;
  body: Block[];
}

interface Image {
  _type: "image";
  _ref: string;
  alt: string;
}

interface Slug {
  _type: "slug";
  current: string;
}
