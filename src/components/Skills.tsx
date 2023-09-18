import { SiReact } from "react-icons/si";

import Badges from "./Badges";

// import * as Si from "react-icons/si";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <section className="max-w-6xl min-h-screen mx-auto px-4 xl:px-0 h-screen snap-center">
      <h2 className="title-home title-numbered">My Expertise</h2>
      <div className="flex flex-col justify-center items-center space-y-10 mt-10">
        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 border-white border-solid border-2">
            <div className="flex items-center mb-4">
              <SiReact className="text-5xl mr-4 " />
              <h3>
                <span className="markup mk-purple text-2xl font-bold">
                  Frontend Dev
                </span>
                <span className="text-xl font-semibold">React, NextJS</span>
              </h3>
            </div>
            <p className="pl-10 leading-5 before:content-['<h3>']  before:-ml-8 before:opacity-30 before:block after:content-['</h3>']  after:-ml-8 after:opacity-30 after:block">
              Passionate about UI/UX. working with a few projects and
              development experience in HTML, CSS, JS, React and NextJS
              frameworks.
            </p>
          </div>
          <div className="p-8 border-white border-solid border-2">
            <div className="flex items-center mb-4">
              <SiReact className="text-5xl mr-4 " />
              <h3>
                <span className="markup mk-purple text-2xl font-bold">
                  Frontend Dev
                </span>
                <span className="text-xl font-semibold">React, NextJS</span>
              </h3>
            </div>
            <p className="pl-10 leading-5 before:content-['<h3>']  before:-ml-8 before:opacity-30 before:block after:content-['</h3>']  after:-ml-8 after:opacity-30 after:block">
              Passionate about UI/UX. working with a few projects and
              development experience in HTML, CSS, JS, React and NextJS
              frameworks.
            </p>
          </div>
          <div className="p-8 border-white border-solid border-2">
            <div className="flex items-center mb-4">
              <SiReact className="text-5xl mr-4 " />
              <h3>
                <span className="markup mk-purple text-2xl font-bold">
                  Frontend Dev
                </span>
                <span className="text-xl font-semibold">React, NextJS</span>
              </h3>
            </div>
            <p className="pl-10 leading-5 before:content-['<h3>']  before:-ml-8 before:opacity-30 before:block after:content-['</h3>']  after:-ml-8 after:opacity-30 after:block">
              Passionate about UI/UX. working with a few projects and
              development experience in HTML, CSS, JS, React and NextJS
              frameworks.
            </p>
          </div>

          <div className="hidden md:inline-block lg:hidden">
            Teste texto de efeito
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mx-auto">
          {skills.map((skill) => (
            <div key={skill._id}>
              <Badges skill={skill}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
