import Image from "next/image";

import CanvasAnimation from "@/components/CanvasAnimation";

function Introduction() {
  return (
    <section className="flex items-center h-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(80%_50%_at_50%_0%,_#268CF530_0%,_#268CF500_100%)] -z-40" />
        <div className="flex flex-col space-y-5 max-w-5xl w-full mx-auto px-12 xl:px-0">
          <h1 className="text-orange-400 md:text-xl">
            Hi There! I&apos;m Igor Lima Garcia
          </h1>
          <p className="text-2xl md:text-3xl lg:text-5xl md:leading-snug lg:leading-snug">
            A <span className="text-indigo-500">Fullstack developer</span> who
            writes clean, elegant and efficient code.
          </p>
          <p className="max-w-3xl font-light md:text-xl ">
            I&apos;m a software engineer specializing in building exceptional
            and practical digital experiences. I&apos;m quietly confident,
            naturally curious, and perpetually working on improving my chops one
            design problem at a time.
          </p>
        </div>
        <Image
          src={"./bg-introduction.svg"}
          alt={"background introduction"}
          className="object-cover hidden md:block md:-z-50 filter blur-xl"
          fill
          sizes="100%"
        />
        <div className="absolute top-0 left-0 w-full h-full -z-30">
          <CanvasAnimation />
        </div>
    </section>
  );
}

export default Introduction;
