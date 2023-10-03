import Image from "next/image";
import Meteor from "./Meteor";

function AboutMe() {
  const title = "Hi There! I'm Igor Lima Garcia";

  return (
    <section
      id="about"
      className="relative flex items-center justify-center h-screen snap-center "
    >
      <h2 className="absolute -left-6 bottom-6 font-fira text-9xl tracking-tighter text-slate-800/90 font-medium">
        About Me.
      </h2>
      <div className="max-w-7xl mx-auto px-4 xl:px-0 grid grid-cols-2">
        <div className="py-8 pl-8 relative">
          {/* <Image
            src={"/profile.png"}
            alt={"Profile picture"}
            width={360}
            height={300}
            className="absolute -z-10 -top-10 -left-8 brightness-[0.25]"
          /> */}
          <h2 className="text-6xl font-bold leading-10 flex flex-wrap">
            {title.split(" ").map((word, idW) => (
              <div key={idW} className="cursor-pointer flex mr-5 mb-4">
                {word.split("").map((character, idC) => (
                  <span
                    key={idC}
                    className="hover:text-orange-400 hover:animate-rubberBand hover:duration-1000"
                  >
                    {character}
                  </span>
                ))}
              </div>
            ))}
          </h2>
          <p className="text-slate-400 font-light text-2xl mt-3">
            Fullstack Developer | ... | ...
          </p>
        </div>
        <div className="relative ">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="space-y-4">
              <p>
                Hello! My name is Igor, my interest in web development started
                back in 2018 when I decided to start my own company. I&apos;ve
                always been someone who has both a creative and a logical side
                and i realized it would be the perfect fit if i could use my
                creative side to design and my logical side to code.
              </p>
              <p>
                Well-organized person, problem solver, independent employee with
                high attention to detail. I want to keep learning, continue
                challenging myself, and do interesting things that matter.
              </p>
              <p>
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
            </div>
            <ol className="grid grid-cols-2 mt-5 gap-x-3">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>TypeScript</li>
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
