import { Variants } from "framer-motion";

export const box: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { type: "spring", duration: 0.6, bounce: 0 },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { type: "spring", duration: 0.6, bounce: 0 },
  },
};

export const boxText: Variants = {
  closed: {
    scale: 0.8,
    opacity: 0,
    transition: { type: "spring", duration: 0.6 },
  },
  open: { scale: 1, opacity: 1, transition: { type: "spring", duration: 0.6 } },
};
