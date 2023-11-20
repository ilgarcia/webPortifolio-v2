"use client";

import { useState } from "react";
import { BiCaretRight } from "react-icons/bi";
import Image from "next/image";
import { Variants, motion as m } from "framer-motion";

import { RubberTitleH3 } from "@/components/miscellaneous/RubberTitle";
import { urlForImage } from "../../../sanity/lib/image";

type Props = {
  portfolio: Portfolio[];
};

const tabVariant: Variants = {
  tab1: { x: "0%" },
  tab2: { x: "-100vw" },
  tab3: { x: "-200vw" },
};

const arrowVariant: Variants = {
  hoverIn: {
    x: 5,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.5,
    },
  },
  hoverOut: { x: 0 },
};

function Portfolio({ portfolio }: Props) {
  const [tab, setTab] = useState<string>("tab1");

  return (
    <section
      id="projects"
      className="relative flex items-center h-screen snap-start"
    >
      <h2 className="absolute -rotate-90 bottom-1/2 translate-y-1/2 -translate-x-1/2 left-8 md:left-14  font-fira text-7xl md:text-8xl lg:text-9xl tracking-tighter text-slate-800/90 font-medium">
        Portfolio.
      </h2>
      <div className="w-screen overflow-hidden py-4">
        <m.div
          initial="tab1"
          variants={tabVariant}
          animate={tab}
          className="w-[300vw] flex"
        >
          <div className="w-[calc(100vw-12px)] mr-3 flex items-center px-2 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 md:space-y-8 ">
              <RubberTitleH3
                title={"Portfolio & Previous Projects"}
                classProps={"justify-center"}
              />
              <p className="max-w-lg text-center">
                I have built various different projects to fit different aspects
                of the client&apos;s business. If you want to see more examples
                of my work than the ones showcased in this site, please contact
                me!
              </p>
              <m.a
                href="/blog#moreProjects"
                className="flex items-center text-indigo-500 text-lg font-medium w-fit"
                initial="hoverOut"
                whileHover="hoverIn"
              >
                <span className="mr-3">More Projects</span>
                <m.span variants={arrowVariant}>
                  <BiCaretRight className="text-xl" />
                </m.span>
              </m.a>
            </div>
          </div>

          {portfolio.map((project, id) => (
            <div key={id} className="w-[calc(100vw-12px)] mr-3">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center px-2 md:px-8 relative">
                <div
                  className={`order-last ${
                    (id + 1) % 2 !== 0 && "lg:order-none"
                  }  relative lg:static bottom-28 z-20 max-w-2xl mx-auto w-full`}
                >
                  <p className="text-center lg:text-start lg:mb-6 text-lg lg:text-xl text-slate-400 font-light  mt-3">
                    {project.appType.title.toUpperCase()}
                  </p>
                  <RubberTitleH3
                    title={project.title}
                    classProps={"justify-center lg:justify-start"}
                  />
                  <div className="flex flex-col space-y-3 lg:space-y-5 py-2 lg:py-6 text-center lg:text-start ">
                    <p>{project.description}</p>
                    <p>
                      <span className="font-extrabold mr-1.5">Built with:</span>
                      {project.skills?.map((skill) => (
                        <span key={skill._id} className="font-light mr-1.5">
                          {skill.title}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start space-y-2">
                    {project.githubLink && (
                      <m.a
                        href={project.githubLink}
                        initial="hoverOut"
                        whileHover="hoverIn"
                        className="flex items-center text-indigo-500 text-lg font-medium w-fit"
                      >
                        <span className="mr-3">Github</span>
                        <m.span variants={arrowVariant}>
                          <BiCaretRight className="text-xl" />
                        </m.span>
                      </m.a>
                    )}
                    {project.externalLink && (
                      <m.a
                        href={project.externalLink}
                        initial="hoverOut"
                        whileHover="hoverIn"
                        className="flex items-center text-indigo-500 text-lg font-medium w-fit"
                      >
                        <span className="mr-3">Application</span>
                        <m.span variants={arrowVariant}>
                          <BiCaretRight className="text-xl" />
                        </m.span>
                      </m.a>
                    )}
                    {project.post?.slug && <m.a href={""}>Post</m.a>}
                  </div>
                </div>
                <div className="h-full">
                  <div className="relative top-20 lg:top-auto lg:h-96 lg:w-full aspect-square lg:aspect-auto max-w-xs lg:max-w-xl rounded-full lg:rounded-none overflow-hidden lg:overflow-auto mx-auto">
                    <div className="bg-indigo-950/70 lg:hidden w-full h-full relative z-10" />
                    <Image
                      src={urlForImage({ ...project.mainImage }).url()}
                      alt={project.mainImage.alt}
                      fill
                      sizes="100%"
                      className="object-cover lg:object-contain relative lg:static"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </m.div>
      </div>
      {portfolio.length > 1 && (
        <div className="absolute z-30 flex items-center space-x-5 -translate-x-1/2 bottom-[10%] left-1/2">
          <button
            onClick={() => setTab("tab1")}
            className={`w-2 h-2 rounded-full bg-slate-700 ${
              tab === "tab1"
                ? "scale-[2.10] duration-200 ease-in hover:scale-[1.75]"
                : "duration-200 ease-in hover:scale-150"
            }`}
          />
          {portfolio.map((_, id) => (
            <button
              key={id}
              onClick={() => setTab("tab" + (id + 2))}
              className={`w-2 h-2 rounded-full bg-slate-700 ${
                tab === "tab" + (id + 2)
                  ? "scale-[2.10] duration-200 ease-in hover:scale-[1.75]"
                  : "duration-200 ease-in hover:scale-150"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Portfolio;