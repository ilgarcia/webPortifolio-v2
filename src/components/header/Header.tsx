"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion as m, Variants, useCycle } from "framer-motion";

import { NavigationToggle } from "@/components/header/NavigationToggle";
import Navigation from "@/components/header/Navigation";
import Logo from "@/components/header/Logo";
import NeonBorder from "@/components/header/NeonBorder";

const sidebarVariant: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 37px) 26px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(18px at calc(100% - 29px) 26px)`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const backgroundVariant: Variants = {
  hidden: { backgroundColor: "#00000000", transition: { duration: 0.8 } },
  visible: {
    backgroundColor: "#04061580",
    backdropFilter: "blur(10px)",
    transition: { duration: 0.8 },
  },
};

const borderVariant: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.8 } },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeLayout, setActiveLayout] = useState(false);

  const ref = useRef<any>(null);

  const displayWidth = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    setIsDesktop(displayWidth);

    if (isDesktop) {
      document.body.classList.remove("toggleBlur");
    } else if (!isDesktop && isOpen) {
      document.body.classList.add("toggleBlur");
    }

    return;
  }, [displayWidth, isDesktop, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        document.body.classList.toggle("toggleBlur");
        toggleOpen();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isOpen, toggleOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentYOffset = window.scrollY;
      const above = currentYOffset > 0;

      setActiveLayout(above);
    };

    handleScroll();

    addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeToggle = () => {
    document.body.classList.toggle("toggleBlur");
    toggleOpen();
  };

  return (
    <m.header
      ref={ref}
      initial={"hidden"}
      animate={!isDesktop || activeLayout ? "visible" : "hidden"}
      variants={backgroundVariant}
      className="fixed top-0 left-0 lg:py-1 w-full z-40"
    >
      <div className="flex items-center max-w-8xl mx-auto px-4 py-2.5 lg:py-4">
        <Logo />
        <m.nav
          className="flex flex-1 justify-end"
          initial={isDesktop ? "closed" : false}
          animate={isOpen || isDesktop ? "open" : "closed"}
        >
          <m.div
            className="fixed top-0 bottom-0 right-0 h-screen [width:min(70vw,300px)] bg-indigo-950 outline-0 shadow-2xl lg:hidden z-40"
            variants={sidebarVariant}
          />
          <Navigation toggle={() => changeToggle()} open={isOpen}/>
          <NavigationToggle toggle={() => changeToggle()} />
        </m.nav>
      </div>
      <m.div variants={borderVariant}>
        <NeonBorder />
      </m.div>
    </m.header>
  );
}

export default Header;
