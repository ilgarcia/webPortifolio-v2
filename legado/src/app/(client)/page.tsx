import { groq } from "next-sanity";

import { client } from "../../../sanity/lib/client";

import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import Portfolio from "../../components/Portfolio/Portfolio";
import Skills from "../../components/Skills/Skills";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Contacts from "../../components/Contacts/Contacts";
import { SocialIcons } from "../../components/Ui/SocialLinks";

export default async function Home() {
  const querySkills = groq`
  *[_type=='skill']{
    ...,
  } | order(_createdAt)
`;

  const queryExperience = groq`
  *[_type=='workExperience']{
    ...,
  } | order(startedAt desc)
`;

  const queryPortfolio = groq`
  *[_type=='portfolio' && display]{
    ...,
    appType->,
    skill[]->,
  } | order(_createdAt desc)
`;

  const skills = await client.fetch(querySkills);
  const experience = await client.fetch(queryExperience);
  const portfolio = await client.fetch(queryPortfolio);

  return (
    <main className="lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll scroll-smooth overflow-x-hidden">
      <Hero />
      <AboutMe />
      <Portfolio portfolio={portfolio} />
      <Skills skills={skills} />
      <WorkExperience experience={experience} />
      <Contacts />
      <SocialIcons />
    </main>
  );
}

// export const revalidate = 60 * 60 * 24; // revalidate this page every 1 day
export const revalidate = 60; // revalidate this page every 60 seconds
