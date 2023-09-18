"use client";

import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";

type Props = {
  portfolio: Portfolio[];
};

function Cards({ portfolio }: Props) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
      {portfolio.map((project, id) => (
        <div
          key={project._id}
          className="relative group block p-3 h-full w-full "
          onMouseEnter={() => setHoveredIndex(id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === id && (
              <m.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-md"
                layoutId="hoverBackground" // required for the background to follow
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className=" rounded h-full w-full px-3 py-5 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
            <div className="relative z-50">
              <div className="flex flex-col space-y-5 p-2">
                <div className="flex justify-between items-center">
                  <div className="text-5xl text-orange-400">
                    <CiFolderOn />
                  </div>
                  <div className="flex items-center space-x-5 text-xl">
                    <a href="" className="hover:text-orange-400">
                      <FiGithub />
                    </a>
                    <a href="" className="hover:text-orange-400">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-orange-400 text-xl font-bold tracking-wide ">
                    {project.title}
                  </h4>
                  <p className="mt-2  tracking-wide  text-sm">
                    {project.description}
                  </p>
                </div>
                <div className="flex space-x-4 font-fira tracking-wide leading-relaxed text-xs">
                  {project.categories.map((category)=> (
                    <div key={category._id}>
                      {category.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
