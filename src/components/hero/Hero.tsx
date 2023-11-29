import Image from "next/image";

import { RubberTitleH1 } from "../miscellaneous/RubberTitles";
import { HoverDownOrangeLink } from "../miscellaneous/UIControls";
import WaveAnimation from "./WaveAnimation";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center h-screen border-b-8 border-slate-900 lg:snap-start"
    >
      <div className="flex flex-col space-y-8 max-w-7xl w-full mx-auto px-4 md:px-8 text-base md:text-lg">
        <RubberTitleH1 title={"Fullstack developer"} />
        <p className="max-w-2xl ">
          I&apos;m a software engineer specializing in building exceptional and
          practical digital experiences. I&apos;m quietly confident, naturally
          curious, and perpetually working on improving my chops one design
          problem at a time.
        </p>
        <HoverDownOrangeLink link={"/#about"} title={"About me"} />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(80%_50%_at_50%_0%,_#268CF530_10%,_#268CF500_100%)] -z-40" />
      <Image
        src={"./bg-hero.svg"}
        alt={"background introduction"}
        className="object-cover hidden md:block md:-z-50 filter blur-xl"
        fill
        sizes="100%"
      />
      <div className="absolute top-0 left-0 w-full h-full -z-30">
        <WaveAnimation />
      </div>
    </section>
  );
}

export default Hero;
