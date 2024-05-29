"use client";

import Link from "next/link";
import { motion as m } from "framer-motion";

const LogoNeon = () => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-2xl lg:text-3xl font-neon drop-shadow-neon"
    >
      <Link rel="preload" prefetch href="/#hero">
        <span>L</span>
        <span className="ml-0.5 text-orange-400 animate-neonBrokenLights">
          .
        </span>
        <span>Garc</span>
        <span className="animate-neonBrokenLights">ia</span>
      </Link>
    </m.div>
  );
};

export { LogoNeon };
