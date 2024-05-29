"use client";

import { motion as m, useCycle, Variants } from "framer-motion";
import { useClickOutside } from "@mantine/hooks";

import { Hamburger } from "./Hamburger";
import { SideNavbar } from "./Navbar";

const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 37px) 24px)`,
    transition: {
      type: "spring",
      stiffness: 20,
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

function Sidebar() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const ref = useClickOutside(() => {
    if (!isOpen) return;
    toggleOpen();
  });

  return (
    <m.div
      ref={ref}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="flex items-center lg:hidden "
    >
      <m.div
        variants={sidebar}
        className="fixed top-0 bottom-0 right-0 flex justify-center items-center h-screen [width:min(70vw,300px)] bg-indigo-950 outline-0 shadow-2xl z-40"
      >
        <SideNavbar toggle={() => toggleOpen()} />
      </m.div>
      <Hamburger toggle={() => toggleOpen()} />
    </m.div>
  );
}

export default Sidebar;
