"use client";

import Image from "next/image";
import { BiCaretRight } from "react-icons/bi";
import { motion as m, Variants } from "framer-motion";

import CanvasAnimation from "@/components/CanvasAnimation";

const arrowVariant: Variants = {
  open: { rotate: 90 },
  closed: { rotate: 0 },
};

function Hero() {
  const title = "Fullstack developer";

  return (
    <section className="relative flex items-center h-screen border-b-8 border-slate-900 snap-center">
      <div className="flex flex-col space-y-8 max-w-7xl w-full mx-auto px-4 xl:px-0">
        <h1 className="text-6xl font-bold leading-10 flex flex-wrap space-x-5">
          {title.split(" ").map((word, idW) => (
            <div key={idW} className="cursor-pointer flex">
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
        </h1>
        {/* <h1 className="text-orange-400 md:text-xl">
          Hi There! I&apos;m Igor Lima Garcia
        </h1> */}
        {/* <p className="text-2xl md:text-3xl lg:text-5xl md:leading-snug lg:leading-snug">
          A <span className="text-indigo-500">Fullstack developer</span> who
          writes clean, elegant and efficient code.
        </p>
        <p className="max-w-3xl font-light md:text-xl ">
          I&apos;m a software engineer specializing in building exceptional and
          practical digital experiences. I&apos;m quietly confident, naturally
          curious, and perpetually working on improving my chops one design
          problem at a time.
        </p> */}
        <p className="max-w-2xl text-lg">
          I&apos;m a software engineer specializing in building exceptional and
          practical digital experiences. I&apos;m quietly confident, naturally
          curious, and perpetually working on improving my chops one design
          problem at a time.
        </p>
        <m.a
          href=""
          className="flex items-center text-indigo-500 text-lg font-medium w-fit"
          initial="closed"
          whileHover="open"
        >
          <span className="mr-3">About me</span>
          <m.span variants={arrowVariant}>
            <BiCaretRight className="text-xl" />
          </m.span>
        </m.a>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(80%_50%_at_50%_0%,_#268CF530_10%,_#268CF500_100%)] -z-40" />
      <Image
        src={"./bg-hero.svg"}
        alt={"background introduction"}
        className="object-cover hidden md:block md:-z-50 filter blur-xl"
        fill
        sizes="100%"
      />
      {/* <div className="absolute top-0 left-0 w-full h-full -z-30">
        <CanvasAnimation />
      </div> */}
    </section>
  );
}

export default Hero;
