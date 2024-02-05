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
    transition: { staggerChildren: 0.06, delayChildren: 0.08 }
  },
};

