import { groq } from "next-sanity";

import { client } from "../../../../sanity/lib/client";


import Socials from "@/components/socials/Socials";
import Contacts from "@/components/contacts/Contacts";
import BlogBanner from "@/components/blogBanner/BlogBanner";
import Tabs from "@/components/blogPosts/Tabs";

const queryPortfolio = groq`
  *[_type=='portfolio']{
    ...,
    appType->,
    skills[]->,
    post[]->
  } | order(_createdAt desc)
`;

const queryPosts = groq`
  *[_type=='post']{
    ...,
    category->,
    skills[]->,
    post[]->,
    portfolio[]->,
  } | order(_createdAt desc)
`;

async function page() {
  
  const portfolio = await client.fetch(queryPortfolio);
  const posts = await client.fetch(queryPosts);

  return (
    <main>
      <BlogBanner />
      <Tabs portfolio={portfolio} posts={posts}/>
      <Contacts />
      <Socials />
    </main>
  );
}

export default page;

export const revalidate = 60; // revalidate this page every 60 seconds
