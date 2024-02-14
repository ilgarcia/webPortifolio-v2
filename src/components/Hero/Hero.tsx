import Link from "next/link";
import { LuMouse } from "react-icons/lu";

import { RubberTitle } from "../Ui/RubberTitles";
import BgLayout from "./BgLayout";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center h-screen border-b-8 border-slate-900 lg:snap-start overflow-hidden"
    >
      <div className="relative max-w-7xl w-full mx-auto px-2 text-base md:text-lg">
        <p className="relative flex items-center gap-0.5 text-xl lg:text-2xl text-orange-400 font-semibold after:contents-[''] after:absolute after:left-8 after:top-8 after:w-px after:h-[70vh] after:mt-3 after:bg-gradient-to-b after:from-slate-600 after:to-slate-600/5">
          <span className="text-3xl lg:text-4xl text-slate-600 font-extralight">
            &lt;
          </span>
          Hi There!
          <span className="text-3xl lg:text-4xl text-slate-600 font-extralight">
            &gt;
          </span>
        </p>
        <div className="flex flex-col space-y-2 ml-12 mt-2 lg:mt-4 mb-20">
          <RubberTitle title={"I'm Igor Lima Garcia"} />
          <p className="max-w-2xl text-slate-200">
            I&apos;am a dedicated software engineer specializing in crafting
            outstanding and practical digital experiences. With a lot of
            confidence, natural curiosity, and a continuous commitment to
            refining my skills, I thrive on tackling design challenges one
            project at a time.
          </p>
        </div>
        <Link
          href={"/#about"}
          className="absolute bottom-0 left-4  animate-bounce"
        >
          <div className="flex flex-col items-center">
            <div className="text-xl text-slate-400 bg-theme-dark">
              <LuMouse />
            </div>
            <div className="py-1.5 -rotate-90 translate-y-1/2 text-sm font-semibold font-fira text-indigo-500 shadow-xl">
              SCROLL
            </div>
          </div>
        </Link>
      </div>
      <BgLayout />
    </section>
  );
}

export default Hero;
