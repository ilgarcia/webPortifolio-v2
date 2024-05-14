import { Variants } from "framer-motion";

const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 37px) 24px)`,
    transition: {
      type: "spring",
      duration: 2,
    },
  }),
  closed: {
    clipPath: `circle(18px at calc(100% - 29px) 24px)`,
    transition: {
      delay: 0.2,
      type: "spring",
      duration: 1,
    },
  },
};

export { sidebar };
