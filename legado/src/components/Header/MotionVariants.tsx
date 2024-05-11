import { Variants } from "framer-motion";

// Header.tsx
const bgHeader: Variants = {
  hidden: { backgroundColor: "#00000000", transition: { duration: 0.8 } },
  visible: {
    backgroundColor: "#04061580",
    backdropFilter: "blur(10px)",
    transition: { duration: 0.8 },
  },
};

const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 37px) 24px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(18px at calc(100% - 29px) 24px)`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};


// Navbar.tsx
const navItems: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const blogLink: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// NavItem.tsx
const navItem: Variants = {
  open: {
    display: "block",
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    transitionEnd: { display: "none" },
  },
};

// NeonBorder;tsx
const neonBorder: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.8 } },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export {bgHeader, sidebar, navItems, blogLink, navItem, neonBorder}