"use client";

import * as Accord from "@radix-ui/react-accordion";

import { HiChevronDown } from "react-icons/hi";
import { PortableText } from "@portabletext/react";
import { RichTextWorkExperience } from "./RichTextWorkExperience";

type Props = {
  experience: WorkExperience[];
};

const Accordion = ({ experience }: Props) => (
  <div className="flex flex-col just max-w-4xl mt-24 mb-16 lg:my-0 px-2 w-full">
    <Accord.Root
      className="w-full"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {experience.map((job, id) => (
        <Accord.Item key={id} className="w-full" value={`item-${id + 1}`}>
          <Accord.Header className="w-full ">
            <Accord.Trigger className="group flex items-center justify-between data-[state=open]:bg-[#740cdc] data-[state=closed]:bg-[#490c86] w-full mt-1.5 sm:my-1.5 py-1 sm:py-2 px-4 md:px-8 rounded-md font-fira font-medium text-sm md:text-base">
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
                  <HiChevronDown
                    className="rotate-0 duration-400 transition-transform group-data-[state=open]:rotate-180 ease-[cubic-bezier(0.87, 0, 0.13, 1)]"
                    aria-hidden
                  />
                </span>
              </span>
            </Accord.Trigger>
          </Accord.Header>
          <Accord.Content className="w-full rounded-md bg-gray-900 border border-gray-800 overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp ">
            <div className="px-2 md:px-8 py-3 ">
              <PortableText
                value={job.body}
                components={RichTextWorkExperience}
              />
            </div>
          </Accord.Content>
        </Accord.Item>
      ))}
    </Accord.Root>
  </div>
);

export default Accordion;
