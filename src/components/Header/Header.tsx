"use client";

import { useEffect } from "react";
import { motion as m, useCycle } from "framer-motion";
import {
  useClickOutside,
  useMediaQuery,
  useWindowScroll,
} from "@mantine/hooks";

import { Hamburger } from "./Hamburger";
import { LogoNeon } from "../Ui/Logo";
import Navbar from "./Navbar";
import NeonBorder from "./NeonBorder";

import { sidebar, bgHeader } from "./MotionVariants";

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [scroll] = useWindowScroll();

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const ref = useClickOutside(() => {
    if (!isOpen) return;
    document.body.classList.toggle("toggleBlur");
    toggleOpen();
  });

  useEffect(() => {
    if (isDesktop || !isOpen) {
      document.body.classList.remove("toggleBlur");
    } else if (!isDesktop && isOpen) {
      document.body.classList.add("toggleBlur");
    }
    return;
  }, [isDesktop, isOpen]);

  return (
    <m.header
      ref={ref}
      initial="hidden"
      animate={scroll.y > 0 ? "visible" : "hidden"}
      variants={bgHeader}
      className="fixed top-0 left-0 lg:py-1 w-full z-40"
    >
      <div className="flex items-center max-w-8xl mx-auto px-4 py-2.5 lg:py-4">
        <LogoNeon />
        <m.nav
          initial="closed"
          animate={isOpen || isDesktop ? "open" : "closed"}
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
    </m.header>
  );
}

export default Header;
