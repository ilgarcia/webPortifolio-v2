import React from "react";
import { groq } from "next-sanity";

import { client } from "../../../sanity/lib/client";

import AboutMe from "../../components/aboutMe/AboutMe";
import Contacts from "../../components/contacts/Contacts";
import Hero from "../../components/hero/Hero";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";
import WorkExperience from "../../components/workExperience/WorkExperience";
import Socials from "../../components/socials/Socials";

const querySkills = groq`
  *[_type=='skills']{
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
    skills[]->,
    post[]->
  } | order(_createdAt desc)
`;

export default async function Home() {
  const skills = await client.fetch(querySkills);
  const experience = await client.fetch(queryExperience);
  const portfolio = await client.fetch(queryPortfolio);

  return (
    <main className="lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll scroll-smooth text-sm md:text-base">
      <Hero />
      <AboutMe />
      <Portfolio portfolio={portfolio} />
      <Skills skills={skills} />
      <WorkExperience experience={experience} />
      <Contacts />
      <Socials />
    </main>
  );
}

export const revalidate = 60 * 60 * 24; // revalidate this page every 60 seconds
