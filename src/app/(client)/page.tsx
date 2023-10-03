import { groq } from "next-sanity";

import { client } from "../../../sanity/lib/client";

import AboutMe from "@/components/AboutMe";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Socials from "@/components/Socials";

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

const queryExperience = groq`
  *[_type=='workExperience']{
    ...,
  } | order(startedAt desc)
`;

export default async function Home() {
  const skills = await client.fetch(querySkills);
  const portfolio = await client.fetch(queryPortfolio);
  const experience = await client.fetch(queryExperience);

  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Hero />
      <div className="relative">
        <div className="absolute top-0 -left-2 w-full h-full bg-[linear-gradient(to_right,_#34d39918_1px,_transparent_1px),linear-gradient(#34d39918_1px,_transparent_1px)] -z-50 bg-[length:100px_100px]" />
        <AboutMe />
        <Portfolio portfolio={portfolio} />
        <Skills skills={skills} />
        <WorkExperience experience={experience} />
        <Contacts />
        <Socials />
      </div>
    </main>
  );
}
