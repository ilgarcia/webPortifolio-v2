import React from "react";
import { groq } from "next-sanity";

import { client } from "../../../sanity/lib/client";

import AboutMe from "../../components/AboutMe/AboutMe";
import Contacts from "../../components/Contacts/Contacts";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import Skills from "../../components/Skills/Skills";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Socials from "../../components/Socials/Socials";

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
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth text-sm md:text-base">
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

export const revalidate = 60; // revalidate this page every 60 seconds
