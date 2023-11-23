import { motion as m } from "framer-motion";

import { neon, dot, brokenNeon } from "@/components/Logo/Variants";

function LogoNeon() {
  return (
    <m.div
      initial={"hidden"}
      animate={"visible"}
      variants={neon}
      className="text-2xl lg:text-3xl font-neon drop-shadow-neon"
    >
      <a href="/#hero">
        L
        <m.span
          initial={"hidden"}
          animate={"visible"}
          variants={dot}
          className="ml-0.5 text-orange-400"
        >
          .
        </m.span>
        Garc
        <m.span initial={"hidden"} animate={"visible"} variants={brokenNeon}>
          ia
        </m.span>
      </a>
    </m.div>
  );
}

export default LogoNeon;
