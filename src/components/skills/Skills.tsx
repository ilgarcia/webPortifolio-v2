import { SiReact } from "react-icons/si";

import Badges from "./Badges";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <section
      id="skills"
      className="relative grid sk:grid-cols-6 items-center max-w-7xl mx-auto my-20 sk:my-0 px-4 sk:h-screen lg:snap-start"
    >
      <h2 className="absolute lg:left-1/2 top-6 lg:top-auto lg:bottom-0 font-fira font-medium text-7xl md:text-8xl tracking-tighter text-slate-800/90 -z-10">
        Skills.
      </h2>
      <div className="relative hidden sk:flex flex-col sk:col-span-2 -space-y-7 mt-8">
        <div className="p-8 max-w-xs relative shadow-xl bg-gray-900 border border-gray-800 rounded-md">
          <div className="flex items-center mb-4">
            <SiReact className="text-5xl mr-4" />
            <h3>
              <span className="markup mk-purple text-2xl font-bold z-10">
                Frontend Dev
              </span>
              <span className="text-xl font-semibold">React, NextJS</span>
            </h3>
          </div>
          <p className="pl-10 leading-5 before:content-['<h3>']  before:-ml-8 before:opacity-30 before:block after:content-['</h3>']  after:-ml-8 after:opacity-30 after:block">
            Passionate about UI/UX. working with a few projects and development
            experience in HTML, CSS, JS, React and NextJS frameworks.
          </p>
        </div>
        <div className="relative p-8 max-w-xs left-24 shadow-xl bg-gray-900 border border-gray-800 rounded-md">
          <div className="flex items-center mb-4">
            <SiReact className="text-5xl mr-4 " />
            <h3>
              <span className="markup mk-orange text-2xl font-bold z-10">
                Backend Dev
              </span>
              <span className="text-xl font-semibold">Node, Java</span>
            </h3>
          </div>
          <p className="pl-10 leading-5 before:content-['<h3>']  before:-ml-8 before:opacity-30 before:block after:content-['</h3>']  after:-ml-8 after:opacity-30 after:block">
            Excited about delving into backend development, with hands-on
            experience in Java, Node.js, and related frameworks.
          </p>
        </div>
      </div>
      <div className="sk:col-span-4 flex flex-wrap justify-center items-center gap-1 sm:gap-1.5 md:gap-4 my-20 sk:my-0 px-4">
        {skills.map((skill) => (
          <div key={skill._id}>
            <Badges skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
