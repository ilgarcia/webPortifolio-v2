import Meteor from "./Meteor";
import { RubberTitleH3 } from "../miscellaneous/RubberTitles";

function AboutMe() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center h-screen lg:snap-start"
    >
      <h2 className="absolute -left-2 lg:-left-6 top-4 lg:bottom-6 font-fira text-7xl md:text-8xl font-medium tracking-tighter text-slate-800/90">
        About Me.
      </h2>
      <div className="lg:grid lg:grid-cols-2 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="relative max-w-lg lg:max-w-none py-3 lg:py-8 lg:pl-8">
          <RubberTitleH3 title={"Hi There! I'm Igor Lima Garcia"} />
          <p className="mt-2 lg:mt-3 font-light text-lg md:text-2xl text-slate-400">
            Fullstack Developer | DevOps
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-3 sm:px-4 py-3 sm:py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="space-y-2 sm:space-y-4">
              <p>
                Hello! My name is Igor, my interest in web development started
                back in 2018 when I decided to start my own company. I&apos;ve
                always been someone who has both a creative and a logical side
                and i realized it would be the perfect fit if i could use my
                creative side to design and my logical side to code.
              </p>
              <p>
                Well-organized person, problem solver with high attention to
                detail. I want to keep learning, continue challenging myself,
                and do interesting things that matter.
              </p>
              <p>
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
            </div>
            <ol className="grid grid-cols-2 gap-x-4 lg:gap-x-8 mt-5 pl-4">
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Java</li>
              <li>WordPress</li>
            </ol>
            <Meteor />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
