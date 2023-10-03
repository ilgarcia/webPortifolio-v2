"use client";

import { useRef } from "react";
import { motion as m, Variants, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";

function Socials() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section ref={ref}>
      <m.div
        className="hidden lg:block fixed bottom-0 right-10 left-auto text-orange-300 w-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 300 },
          visible: {
            opacity: !isInView ? 1 : 0,
            y: !isInView ? 0 : 300,
            transition: { duration: 1, delay: 0.2 },
          },
        }}
      >
        <ul className="flex flex-col items-center m-0 p-0 after:contents-[''] after:block after:w-0.5 after:h-24 after:mt-3 after:bg-orange-300">
          <li className="my-3 mx-auto ease-in-out transition-all duration-500 hover:-translate-y-1 hover:text-slate-100">
            <a
              href={""}
              className="text-xl"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FiGithub />
            </a>
          </li>
          <li className="my-3 mx-auto ease-in-out transition-all duration-500 hover:-translate-y-1 hover:text-slate-100">
            <a
              href={""}
              className="text-xl"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </li>
          <li className="my-3 mx-auto ease-in-out transition-all duration-500 hover:-translate-y-1 hover:text-slate-100">
            <a
              href={""}
              className=" text-xl"
              aria-label="Resume"
              target="_blank"
              rel="noopener noreferrer"
              title="Curriculum"
            >
              <FiFileText />
            </a>
          </li>
        </ul>
      </m.div>
    </section>
  );
}

export default Socials;
