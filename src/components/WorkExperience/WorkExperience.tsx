"use client";

import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { motion as m, AnimatePresence } from "framer-motion";

import { RichTextWorkExperience } from "./RichTextWorkExperience";
import { box, boxText, workLine } from "./MotionVariants";

type Props = {
  experience: WorkExperience[];
};

function WorkExperience({ experience }: Props) {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <section
      id="experience"
      className="relative flex justify-center items-center lg:h-screen overflow-hidden lg:snap-start"
    >
      <h2 className="absolute -left-6 top-0 lg:top-auto lg:bottom-6 font-fira font-medium text-6xl md:text-8xl tracking-tighter text-slate-800/90 -z-10">
        Work Experience.
      </h2>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="flex flex-col just max-w-4xl mt-24 mb-16 lg:my-0 px-2 w-full"
      >
        {experience.map((job, id) => (
          <m.div key={id} variants={workLine} className="w-full">
            <m.button
              initial={false}
              animate={{
                backgroundColor: id === expanded ? "#740cdc" : "#490c86",
              }}
              whileTap={{ scale: 1.15 }}
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
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={box}
                  className="w-full rounded-md bg-slate-800"
                >
                  <m.div variants={boxText} className="px-2 md:px-8 py-3">
                    <PortableText
                      value={job.body}
                      components={RichTextWorkExperience}
                    />
                  </m.div>
                </m.div>
              )}
            </AnimatePresence>
          </m.div>
        ))}
      </m.div>
    </section>
  );
}

export default WorkExperience;
