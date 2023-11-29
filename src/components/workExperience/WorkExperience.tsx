"use client";

import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { motion as m, AnimatePresence } from "framer-motion";

import { RichTextWorkExperience } from "./RichTextWorkExperience";

type Props = {
  experience: WorkExperience[];
};

function WorkExperience({ experience }: Props) {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <section
      id="experience"
      className="relative flex justify-center h-screen overflow-hidden lg:snap-start"
    >
      <h2 className="absolute -left-6 bottom-6 font-fira text-6xl md:text-8xl lg:text-9xl tracking-tighter text-slate-800/90 font-medium">
        Work Experience.
      </h2>
      <div className="absolute max-w-4xl px-2 top-16 sm:top-1/4 flex flex-col w-full">
        {experience.map((job, id) => (
          <div key={id} className="w-full">
            <m.button
              initial={false}
              animate={{
                backgroundColor: id === expanded ? "#740cdc" : "#490c86",
              }}
              onClick={() => setExpanded(id === expanded ? false : id)}
              className="flex items-center justify-between bg-indigo-950 w-full mt-1.5 sm:my-1.5 py-1 sm:py-2 px-4 md:px-8 rounded-md font-fira font-medium text-sm md:text-base"
            >
              <span className="flex flex-col sm:flex-row">
                <span>{job.title}</span>
                <span> @ {job.company}</span>
              </span>
              <span className="flex flex-col sm:flex-row items-center ">
                <span>
                  {new Date(job.startedAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "2-digit",
                  })}
                </span>
                <span className="hidden sm:block mx-2"> - </span>
                <span>
                  {job.endedAt
                    ? new Date(job.endedAt).toLocaleDateString("en-US", {
                        month: "short",
                        year: "2-digit",
                      })
                    : "Present"}
                </span>
                <span className="hidden md:block opacity-75 p-2 sm:ml-6 rounded-full border border-transparent hover:border-slate-700 ">
                  {id === expanded ? <HiMinus /> : <HiPlus />}
                </span>
              </span>
            </m.button>
            <AnimatePresence initial={false}>
              {id === expanded && (
                <m.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                  className="w-full rounded-md bg-slate-800"
                >
                  <m.div
                    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                    transition={{ duration: 0.8 }}
                    className="px-2 md:px-8 py-3"
                  >
                    <PortableText
                      value={job.body}
                      components={RichTextWorkExperience}
                    />
                  </m.div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
