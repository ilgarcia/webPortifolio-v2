"use client";

import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

import { socials } from "../../data/constants";

const SocialList = ({ ...props }) => {
  return (
    <div className="mt-10 w-full" {...props}>
      <ul className="flex justify-center text-orange-400">
        {socials
          .filter((social) => social.showIcon)
          .map((social) => (
            <li
              key={social.type}
              className="mx-3 ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125"
            >
              <a
                href={social.link}
                aria-label={social.title}
                title={social.title}
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            </li>
          ))}
      </ul>
      {socials
        .filter((social) => !social.showIcon)
        .map((social) => (
          <p key={social.type} className="text-center text-sm mt-4">
            {social.link}
          </p>
        ))}
    </div>
  );
};

const SocialIcons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref}>
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
                  {social.icon}
                </a>
              </li>
            ))}
        </ul>
      </m.div>
    </div>
  );
};

export { SocialList, SocialIcons };
