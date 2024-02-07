import { Variants } from "framer-motion";

export const left: Variants = {
  hidden: { opacity: 0, x:-300 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const right: Variants = {
  hidden: { opacity: 0, x:300 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 }}
};
