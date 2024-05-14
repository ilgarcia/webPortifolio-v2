"use client";

import { motion as m, useCycle } from "framer-motion";
import { useClickOutside } from "@mantine/hooks";

import { Hamburger } from "./Hamburger";
import { LogoNeon } from "../Ui/Logo";
import Navbar from "./Navbar";
import NeonBorder from "./NeonBorder";

import { sidebar } from "./MotionVariants";

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const ref = useClickOutside(() => {
    if (!isOpen) return;
    toggleOpen();
  });

  return (
    <header
      ref={ref}
      className="fixed top-0 lg:-left-3 w-full z-40 backdrop-blur-lg"
    >
      <div className="flex items-center max-w-8xl mx-auto px-4 py-2.5 lg:py-3.5">
        <LogoNeon />
        <m.nav
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="flex flex-1 justify-end"
        >
          <Navbar toggle={() => toggleOpen()} open={isOpen} />
          <Hamburger toggle={() => toggleOpen()} />
          <m.div
            variants={sidebar}
            className="fixed top-0 bottom-0 right-0 h-screen [width:min(70vw,300px)] bg-indigo-950 outline-0 shadow-2xl lg:hidden z-40"
          />
        </m.nav>
      </div>
      <NeonBorder />
    </header>
  );
}

export default Header;
