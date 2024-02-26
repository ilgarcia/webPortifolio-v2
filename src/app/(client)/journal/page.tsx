import { groq } from "next-sanity";

import { client } from "../../../../sanity/lib/client";

import { SocialIcons } from "../../../components/Ui/SocialLinks";
import Contacts from "../../../components/Contacts/Contacts";
import Banner from "../../../components/Journal/Banner";
import Tabs from "../../../components/Journal/Tabs";

const queryPortfolio = groq`
  *[_type=='portfolio']{
    ...,
    appType->,
    skill[]->,
    post[]->,
  } | order(_createdAt desc)
`;

const queryPosts = groq`
  *[_type=='post']{
    ...,
    category->,
    skill[]->,
    post[]->,
    portfolio[]->,
  } | order(_createdAt desc)
`;

export const metadata = {
  title: "Code Journal",
  openGraph: {
    title: "Code Journal",
    description: "A sample of my ideas and creations",
  },
};

async function page() {
  const portfolio = await client.fetch(queryPortfolio);
  const posts = await client.fetch(queryPosts);

  return (
    <main>
      <Banner />
      <Tabs portfolio={portfolio} posts={posts} />
      <Contacts />
      <SocialIcons />
    </main>
  );
}

export default page;

// export const revalidate = 60 * 60 * 24; // revalidate this page every 1 day
export const revalidate = 60; // revalidate this page every 60s
