
import AboutMe from "@/components/AboutMe";
import Contacts from "@/components/Contacts";
import Introduction from "@/components/Introduction";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main>
      <Introduction />
      <AboutMe />
      <Portfolio />
      <Skills />
      <WorkExperience />
      <Contacts />
    </main>
  );
}
