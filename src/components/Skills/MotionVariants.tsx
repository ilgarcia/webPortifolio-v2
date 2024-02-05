import { Variants } from "framer-motion";

export const cardOne: Variants = {
  hidden: { opacity: 0, y: -300 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const cardTwo: Variants = {
  hidden: { opacity: 0, y: 300 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
};

export const badgesHolder: Variants = {
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

export const badges: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};
