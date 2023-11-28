"use client";

import { useEffect } from "react";
import { motion as m, useCycle } from "framer-motion";
import {
  useClickOutside,
  useMediaQuery,
  useWindowScroll,
} from "@mantine/hooks";

import { Hamburger } from "./Hamburger";
import NavItems from "./NavItems";
import LogoNeon from "../Logo/LogoNeon";
import NeonBorder from "./NeonBorder";

import { sidebar, bgNavbar } from "./Variants";

function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [scroll, scrollTo] = useWindowScroll();

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
      initial={"hidden"}
      animate={!isDesktop || scroll.y > 0 ? "visible" : "hidden"}
      variants={bgNavbar}
      className="fixed top-0 left-0 lg:py-1 w-full z-40"
    >
      <div className="flex items-center max-w-8xl mx-auto px-4 py-2.5 lg:py-4">
        <LogoNeon />
        <m.nav
          className="flex flex-1 justify-end"
          initial={isDesktop ? "closed" : false}
          animate={isOpen || isDesktop ? "open" : "closed"}
        >
          <m.div
            className="fixed top-0 bottom-0 right-0 h-screen [width:min(70vw,300px)] bg-indigo-950 outline-0 shadow-2xl lg:hidden z-40"
            variants={sidebar}
          />
          <NavItems toggle={() => toggleOpen()} open={isOpen} />
          <Hamburger toggle={() => toggleOpen()} />
        </m.nav>
      </div>
      <NeonBorder />
    </m.header>
  );
}

export default Navbar;
