"use client";

import { motion as m, Variants } from "framer-motion";

const neonBorder: Variants = {
  open: { opacity: 1, transition: { duration: 0.8 } },
  closed: { opacity: 0, transition: { duration: 0.8 } },
};

function NeonBorder() {
  return (
    <m.div
      initial="closed"
      animate="open"
      variants={neonBorder}
      className="relative -z-10"
    >
      <div className="absolute bottom-0 right-4 mt-[2px] flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-screen -scale-x-100">
          <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
        </div>
      </div>
    </m.div>
  );
}

export default NeonBorder;
