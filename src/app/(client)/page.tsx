import { groq } from "next-sanity";

import { client } from "../../../sanity/lib/client";


import AboutMe from "@/components/AboutMe";
import Contacts from "@/components/Contacts";
import Introduction from "@/components/Introduction";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Footer from "@/components/Footer";

const querySkills = groq`
  *[_type=='skills']{
    ...,
  } | order(_createdAt)
`;

const queryPortfolio = groq`
  *[_type=='portfolios']{
    ...,
    categories[]->,
  } | order(_createdAt)
`;

export default async function Home() {
  const skills = await client.fetch(querySkills);
  const portfolio = await client.fetch(queryPortfolio);

  return (
    <main className="[counter-reset:section-number] h-screen snap-y snap-mandatory overflow-y-scroll">
      <Introduction />
      <AboutMe />
      <Portfolio portfolio={portfolio} />
      <Skills skills={skills} />
      <WorkExperience />
      <Contacts />
      <Footer />
    </main>
  );
}
