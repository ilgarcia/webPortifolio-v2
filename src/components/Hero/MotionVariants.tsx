import { Variants } from "framer-motion";

export const intro: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export const introText: Variants = {
  hidden: { opacity: 0, x:-300 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
};