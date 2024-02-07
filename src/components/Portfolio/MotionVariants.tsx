import { Variants } from "framer-motion";

// Portfolio.tsx
export const carousel: Variants = {
  hidden: { opacity: 0, y: 300 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8} },
};

export const dotButton: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, delay: 0.6} },
};
