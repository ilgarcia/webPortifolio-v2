import Badges from "./Badges";

import * as Si from "react-icons/si";
import * as Fa from "react-icons/fa";

type Props = {
  skills: Skill[];
};

function DynamicIcon(icon: string): JSX.Element {
  if (icon.includes("Si")) {
    const IconComponent = Si[icon as keyof typeof Si];
    return <IconComponent className="text-xl sm:text-2xl lg:text-4xl" />;
  } else if (icon.includes("Fa")) {
    const IconComponent = Fa[icon as keyof typeof Fa];
    return <IconComponent className="text-xl sm:text-2xl lg:text-4xl" />;
  } else {
    return <Fa.FaAsterisk />;
  }
}

function Skills({ skills }: Props) {
  return (
    <section
      id="skills"
      className="relative lg:flex sk:grid sk:grid-cols-6 items-center max-w-7xl mx-auto my-20 sk:my-0 px-4 lg:h-screen lg:snap-start"
    >
      <h2 className="absolute lg:left-1/2 -top-14 lg:top-auto lg:bottom-0 font-fira font-medium text-7xl md:text-8xl tracking-tighter text-slate-800/90 -z-10">
        Skills.
      </h2>
      <div className="relative flex flex-wrap justify-center gap-4 sk:gap-0 lg:hidden sk:flex sk:flex-col sk:col-span-2 sk:-space-y-7 sk:mt-8">
        <div className="p-8 max-w-xs relative shadow-xl bg-gray-900 border border-gray-800 rounded-md">
          <div className="flex items-center mb-4">
            <Si.SiReact className="text-5xl mr-4" />
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
        <div className="sk:relative p-8 max-w-xs left-24 shadow-xl bg-gray-900 border border-gray-800 rounded-md">
          <div className="flex items-center mb-4">
            <Si.SiReact className="text-5xl mr-4 " />
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
      <div className="sk:col-span-4 flex flex-wrap justify-center items-center gap-1 sm:gap-1.5 md:gap-4 my-10 sk:my-0 px-4">
        {skills
          .filter((skill) => skill.display)
          .map((skill) => (
            <div key={skill._id}>
              <Badges title={skill.title} Icon={DynamicIcon(skill.icon)} />
            </div>
          ))}
      </div>
    </section>
  );
}

export default Skills;
