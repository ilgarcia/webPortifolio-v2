import { groq } from "next-sanity";

import { client } from "../../../../sanity/lib/client";

// import { SocialIcons } from "../../../components/Ui/SocialLinks";
import Contacts from "../../../components/Contacts/Contacts";
import Banner from "../../../components/Journal/Banner";
import PortfolioGrid from "../../../components/Journal/PortfolioGrid";

const queryPortfolio = groq`
  *[_type=='portfolio' && title =='Portfolio (Version-2)']{
    ...,
    appType->,
    "teste": *[_type=='skill']{
      title
    }.teste[]
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

  console.log(portfolio[0])

  return (
    <main>
      <Banner />
      {/* <PortfolioGrid portfolio={portfolio} /> */}
      <Contacts />
      {/* <SocialIcons /> */}
    </main>
  );
}

export default page;

// export const revalidate = 60 * 60 * 24; // revalidate this page every 1 day
export const revalidate = 60; // revalidate this page every 60s
