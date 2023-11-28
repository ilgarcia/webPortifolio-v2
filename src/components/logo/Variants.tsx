import { Variants } from "framer-motion";

export const neon: Variants = {
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

export const dot: Variants = {
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

export const brokenNeon: Variants = {
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