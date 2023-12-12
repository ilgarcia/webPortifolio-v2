import Meteor from "./Meteor2";
import { RubberTitleH3 } from "../Miscellaneous/RubberTitles2";

function AboutMe() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center my-14 lg:my-0 pt-20 lg:pt-0 lg:h-screen lg:snap-start"
    >
      <h2 className="absolute -left-2 lg:-left-6 top-6 lg:top-auto lg:bottom-6 font-fira text-7xl md:text-8xl font-medium tracking-tighter text-slate-800/90">
        About Me.
      </h2>
      <div className="lg:grid lg:grid-cols-2 max-w-7xl mx-auto px-2 md:px-6">
        <div className="relative max-w-lg lg:max-w-none pb-6 lg:py-8 lg:pl-8">
          <RubberTitleH3 title={"Meet the Developer"} />
          <p className="mt-1 lg:mt-3 font-light text-lg md:text-2xl text-slate-400">
            Fullstack Developer | DevOps
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-3 sm:px-4 py-3 sm:py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="space-y-2 sm:space-y-4">
              <p>
                My journey into web development ignited in 2018 when I embarked
                on the adventure of establishing my own company. Striving to
                balance both my creative and logical faculties, I recognized the
                perfect synergy in utilizing my creativity for design and my
                logical prowess for coding.
              </p>
              <p>
                A meticulous and well-organized individual, I thrive as a
                problem solver with an unwavering attention to detail. I&apos;am
                always committed to learning and growing professionally, an
                eagerness to embrace new challenges.
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
