"use client";

import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

import { DynamicIconFi } from "../Ui/DynamicIcon";

import { socials } from "../../utils/constants";

function Socials() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <m.div
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
        className="hidden lg:block fixed bottom-0 right-14 left-auto text-orange-300 w-10"
      >
        <ul className="flex flex-col items-center m-0 p-0 after:contents-[''] after:block after:w-px after:h-20 after:mt-3 after:bg-orange-300/50">
          {socials
            .filter((social) => social.showIcon)
            .map((social) => (
              <li
                key={social.type}
                className="my-2 p-2 mx-auto ease-in-out transition-all duration-500 hover:-translate-y-1 hover:text-slate-100 bg-slate-800 rounded-full shadow shadow-orange-300/50"
              >
                <a
                  href={social.link}
                  aria-label={social.title}
                  title={social.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  {DynamicIconFi(social.icon)}
                </a>
              </li>
            ))}
        </ul>
      </m.div>
    </section>
  );
}

export default Socials;
