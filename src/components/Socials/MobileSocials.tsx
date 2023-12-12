import { motion as m } from "framer-motion";
import { RiCopyrightLine } from "react-icons/ri";

import { DynamicIconFi } from "../Miscellaneous/DynamicIcon";

import { socials } from "../../constants";

function MobileSocials({ variants }: any) {
  return (
    <div className="lg:hidden -z-10">
      <m.div variants={variants} className="mt-10 w-full">
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
                  {DynamicIconFi(social.icon)}
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
      </m.div>
    </div>
  );
}

export default MobileSocials;
