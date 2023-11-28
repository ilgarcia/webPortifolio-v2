import { SiReact } from "react-icons/si";

import Badges from "./Badges";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <section
      id="skills"
      className="grid sk:grid-cols-6 items-center max-w-7xl min-h-screen mx-auto px-4 h-screen snap-start relative"
    >
      <h2 className="absolute lg:left-1/2 bottom-0 font-fira text-7xl md:text-8xl lg:text-9xl tracking-tighter text-slate-800/90 font-medium">
        Skills.
      </h2>
      <div className="hidden sk:col-span-2 sk:flex flex-col -space-y-7 mt-8 relative">
        <div className="p-8 max-w-xs relative shadow-xl bg-gray-900 border border-gray-800 rounded-md">
          <div className="flex items-center mb-4">
            <SiReact className="text-5xl mr-4 " />
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
        <div className="p-8 max-w-xs relative left-24 shadow-xl bg-gray-900 border border-gray-800 rounded-md">
          <div className="flex items-center mb-4">
            <SiReact className="text-5xl mr-4 " />
            <h3>
              <span className="markup mk-orange text-2xl font-bold z-10">
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
      </div>
      <div className="sk:col-span-4 absolute top-16 sm:static flex flex-wrap justify-center items-center gap-1 sm:gap-1.5 md:gap-4 px-4">
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
