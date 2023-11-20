import { motion as m, Variants } from "framer-motion";
import * as Fi from "react-icons/fi";
import { RiCopyrightLine } from "react-icons/ri";

import { socials } from "@/constants";

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function NavigationSocials() {
  function dynamicIcon(icon: string): JSX.Element {
    const IconComponent = Fi[icon as keyof typeof Fi];
    return <IconComponent className="text-xl" />;
  }

  return (
    <div className="lg:hidden absolute top-0 w-full h-[calc(100vh-72px)] -z-10">
      <m.div variants={variants} className="absolute bottom-0 w-full">
        <div className="mb-5">
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
                    {dynamicIcon(social.icon)}
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
        <footer className=" sm:hidden bg-slate-950 text-orange-400 w-full border-t-2 border-indigo-500/30 px-4">
          <div className="flex items-center justify-center max-w-8xl mx-auto py-4 text-sm sm:text-base font-light">
            <RiCopyrightLine className="mr-1" /> 2023 Igor Lima Garcia
          </div>
        </footer>
      </m.div>
    </div>
  );
}

export default NavigationSocials;
