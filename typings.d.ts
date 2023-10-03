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

interface Category extends Base {
  title: string;
}

interface Portfolio extends Base {
  title: string;
  description: string;
  githubLink?: string;
  externalLink?: string;
  blogLink?: string;
  categories: Category[];
}

interface Skill extends Base {
  title: string;
  icon: string;
  display: boolean;
}

interface WorkExperience extends Base {
  title: string;
  company: string;
  startedAt: string;
  endedAt: string;
  display: boolean;
  body: Block[];
}