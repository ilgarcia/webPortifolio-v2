import { motion as m, Variants } from "framer-motion";

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0.6, 1],
    transition: {
      ease: "easeIn",
      duration: 2,
    },
  },
};

const dotVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0.6, 0.4, 0.7, 0.6, 0.9],
    transition: {
      repeat: Infinity,
      duration: 3.5,
    },
  },
};

const lightVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0.5, 0.7, 0.6, 0.4, 0.8],
    transition: {
      repeat: Infinity,
      duration: 3,
    },
  },
};

function Logo() {
  return (
    <m.div
      className="text-2xl lg:text-3xl font-neon drop-shadow-neon"
      initial={"hidden"}
      animate={"visible"}
      variants={variants}
    >
      <a href="/#hero">
        L
        <m.span
          className="ml-0.5 text-orange-400"
          initial={"hidden"}
          animate={"visible"}
          variants={dotVariants}
        >
          .
        </m.span>
        Garc
        <m.span initial={"hidden"} animate={"visible"} variants={lightVariants}>
          ia
        </m.span>
      </a>
    </m.div>
  );
}

export default Logo;
