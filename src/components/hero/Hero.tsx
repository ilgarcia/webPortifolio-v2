import Image from "next/image";
import Link from "next/link";
import { LuMouse } from "react-icons/lu";

import { RubberTitleH1 } from "../miscellaneous/RubberTitles";
import { HoverDownOrangeLink } from "../miscellaneous/UIControls";
import WaveAnimation from "./WaveAnimation";
import { HeroCanvas } from "./HeroCanvas";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center h-screen border-b-8 border-slate-900 lg:snap-start overflow-hidden"
    >
      <div className="relative max-w-7xl w-full mx-auto px-4 md:px-8 text-base md:text-lg">
        {/* <RubberTitleH1 title={"Fullstack developer"} /> */}
        <p className="relative flex gap-0.5 items-center text-2xl text-orange-400 font-semibold after:contents-[''] after:absolute after:left-6 after:top-8 after:w-px after:h-[70vh] after:mt-3 after:bg-gradient-to-b after:from-slate-600 after:to-slate-600/10">
          <span className="text-4xl text-slate-600 font-extralight">&lt;</span>
          Hi There!
          <span className="text-4xl text-slate-600 font-extralight">&gt;</span>
        </p>
        <div className="flex flex-col space-y-6 ml-12 mt-4">
          <RubberTitleH1 title={"I'm Igor Lima Garcia"} />
          <p className="max-w-2xl text-slate-200">
            I&apos;am a dedicated software engineer specializing in crafting
            outstanding and practical digital experiences. With a lot of
            confidence, natural curiosity, and a continuous commitment to
            refining my skills, I thrive on tackling design challenges one
            project at a time.
          </p>
          {/* <HoverDownOrangeLink link={"/#about"} title={"About me"} /> */}
        </div>
        <Link
          href={"/#about"}
          className="absolute -bottom-24 flex flex-col items-center transition  duration-300 hover:animate-bounce"
        >
          <div className="text-xl text-slate-400 bg-theme-dark">
            <LuMouse />
          </div>
          <div className="py-1.5 -rotate-90 translate-y-1/2 text-sm font-semibold font-fira text-indigo-500 shadow-xl">
            SCROLL
          </div>
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(80%_50%_at_50%_0%,_#268CF530_10%,_#268CF500_100%)] -z-40" />
      <Image
        src={"./bg-hero.svg"}
        alt={"background introduction"}
        className="object-cover hidden md:block md:-z-40 filter blur-xl"
        fill
        sizes="100%"
      />
      <div className="absolute top-0 left-0 hidden lg:block w-full h-full -z-30">
        <HeroCanvas />
      </div>
    </section>
  );
}

export default Hero;
