"use client";

import Image from "next/image";
import Link from "next/link";
import { LuMouse } from "react-icons/lu";
import { motion as m } from "framer-motion";

import { RubberTitle } from "../Ui/RubberTitles";
import { HeroCanvas } from "./HeroCanvas";

import { intro, introText } from "./MotionVariants";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center h-screen border-b-8 border-slate-900 lg:snap-start overflow-hidden"
    >
      {/* Content */}
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="relative max-w-7xl w-full mx-auto px-2 text-base md:text-lg"
      >
        <m.p
          variants={intro}
          className="relative flex items-center gap-0.5 text-xl lg:text-2xl text-orange-400 font-semibold after:contents-[''] after:absolute after:left-8 after:top-8 after:w-px after:h-[70vh] after:mt-3 after:bg-gradient-to-b after:from-slate-600 after:to-slate-600/5"
        >
          <span className="text-3xl lg:text-4xl text-slate-600 font-extralight">
            &lt;
          </span>
          Hi There!
          <span className="text-3xl lg:text-4xl text-slate-600 font-extralight">
            &gt;
          </span>
        </m.p>
        <m.div
          variants={introText}
          className="flex flex-col space-y-2 ml-12 mt-2 lg:mt-4 mb-20"
        >
          <RubberTitle title={"I'm Igor Lima Garcia"} />
          <p className="max-w-2xl text-slate-200">
            I&apos;am a dedicated software engineer specializing in crafting
            outstanding and practical digital experiences. With a lot of
            confidence, natural curiosity, and a continuous commitment to
            refining my skills, I thrive on tackling design challenges one
            project at a time.
          </p>
        </m.div>
        <Link
          href={"/#about"}
          className="absolute bottom-0 left-4  animate-bounce"
        >
          <m.div variants={intro} className="flex flex-col items-center">
            <div className="text-xl text-slate-400 bg-theme-dark">
              <LuMouse />
            </div>
            <div className="py-1.5 -rotate-90 translate-y-1/2 text-sm font-semibold font-fira text-indigo-500 shadow-xl">
              SCROLL
            </div>
          </m.div>
        </Link>
      </m.div>
      {/* Background Layout */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(80%_50%_at_50%_0%,_#268CF530_10%,_#268CF500_100%)] -z-30" />
      <Image
        src={"./bg-hero.svg"}
        alt={"background introduction"}
        className="object-cover -z-40 filter blur-xl"
        fill
        sizes="100%"
      />
      <div className="absolute top-0 left-0  w-full h-full -z-20">
        <HeroCanvas />
      </div>
    </section>
  );
}

export default Hero;
