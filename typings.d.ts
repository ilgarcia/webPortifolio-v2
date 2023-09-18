type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

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
