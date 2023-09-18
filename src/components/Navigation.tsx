import * as React from "react";
import { motion as m } from "framer-motion";

import NavigationItem from "@/components/NavigationItem";
import NavigationButton from "./NavigationButton";

const items = ["About", "Projects", "Skills", "Experience", "Contact"];

// fix tomorrow

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

function Navigation() {
  return (
    <m.div
      className="flex justify-center items-center absolute lg:static top-0 right-0 bottom-0 [width:min(70vw,300px)] lg:min-w-fit font-fira text-base lg:text-sm lg:space-x-7 space-y-5 lg:space-y-0 z-50"
      variants={variants}
    >
      <ul className="absolute top-28 lg:static flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
        {items.map((item) => (
          <NavigationItem key={item} item={item} />
        ))}
      </ul>
      <NavigationButton item={"Blog"} />
    </m.div>
  );
}

export default Navigation;
