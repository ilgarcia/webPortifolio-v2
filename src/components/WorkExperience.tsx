"use client";

import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { motion as m, AnimatePresence } from "framer-motion";

import { RichTextComponents } from "@/components/RichTextComponents";

type Props = {
  experience: WorkExperience[];
};

function WorkExperience({ experience }: Props) {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <section className="flex justify-center h-screen snap-center relative">
      <h2 className="absolute -left-6 bottom-6 font-fira text-9xl tracking-tighter text-slate-800/90 font-medium">
        Work Experience.
      </h2>
      <div className="absolute max-w-4xl px-4 xl:px-0 top-1/4 flex flex-col w-full">
        {experience.map((job, id) => (
          <div key={id} className="w-full">
            <m.button
              initial={false}
              animate={{
                backgroundColor: id === expanded ? "#FF0088" : "#0055FF",
              }}
              onClick={() => setExpanded(id === expanded ? false : id)}
              className="flex items-center justify-between bg-indigo-950 w-full my-2 py-3 px-8 rounded-md font-fira font-medium"
            >
              <span>
                {job.title} @ {job.company}
              </span>
              <span className="flex items-center gap-8">
                {new Date(job.startedAt).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}{" "}
                -{" "}
                {job.endedAt
                  ? new Date(job.endedAt).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })
                  : "Present"}
                <span className="opacity-75 p-2 rounded-full border border-transparent hover:border-slate-700">
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
                    className="px-8 py-4"
                  >
                    <PortableText
                      value={job.body}
                      components={RichTextComponents}
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
