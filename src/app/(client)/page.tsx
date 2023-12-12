import React from "react";
import { groq } from "next-sanity";

import { client } from "../../../sanity/lib/client";

import AboutMe from "../../components/AboutMe/AboutMe2";
import Contacts from "../../components/Contacts/Contacts2";
import Hero from "../../components/Hero/Hero2";
import Portfolio from "../../components/Portfolio/Portfolio2";
import Skills from "../../components/Skills/Skills2";
import WorkExperience from "../../components/WorkExperience/WorkExperience2";
import Socials from "../../components/Socials/Socials2";

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
    <main className="lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll scroll-smooth">
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

export const revalidate = 60 * 60 * 24; // revalidate this page every 1 day
