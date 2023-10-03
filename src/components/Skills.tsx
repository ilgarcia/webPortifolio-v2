import { SiReact } from "react-icons/si";

import Badges from "./Badges";

// import * as Si from "react-icons/si";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <section className="grid grid-cols-6 items-center max-w-7xl min-h-screen mx-auto px-4 xl:px-0 h-screen snap-center relative">
      <h2 className="absolute left-1/2 bottom-0 font-fira text-9xl tracking-tighter text-slate-800/90 font-medium">
        Skills.
      </h2>
      <div className="col-span-2 flex flex-col -space-y-7 mt-8 relative">
        <div className="p-8 max-w-xs relative shadow-xl bg-gray-900 border border-gray-800 rounded-md">
          {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl -z-40" /> */}
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
          {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl -z-40" /> */}
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
      <div className="col-span-4 flex flex-wrap justify-center items-center gap-4 mx-auto">
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
