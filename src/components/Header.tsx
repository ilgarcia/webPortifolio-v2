"use client";

import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { motion as m, Variants, useCycle } from "framer-motion";

import { NavigationToggle } from "@/components/NavigationToggle";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";


const sidebarVariant: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 49px) 30.5px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(20px at calc(100% - 49px) 30.5px)`,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  // Testando
  useEffect(() => {
    if (isDesktop) {
      document.body.classList.remove("toggleBlur");
    } else if (!isDesktop && isOpen) {
      document.body.classList.add("toggleBlur");
    } else if (!isOpen) return;

    return;
  }, [isDesktop, isOpen]);

  function changeToggle() {
    document.body.classList.toggle("toggleBlur");
    toggleOpen();
  }

  return (
    <header className="fixed top-0 left-0  w-screen  z-40">
      <div className="flex items-center max-w-7xl mx-auto px-12 xl:px-0 py-4">
        <m.div>
          <Logo />
        </m.div>
        <m.nav
          className="flex flex-1 justify-end"
          initial={false}
          animate={isOpen || isDesktop ? "open" : "closed"}
        >
          <m.div
            className="fixed top-0 bottom-0 right-0 h-screen [width:min(70vw,300px)] bg-indigo-950  outline-0 shadow-2xl lg:hidden"
            variants={sidebarVariant}
          />
          <Navigation isDesktop={isDesktop} />
          <NavigationToggle toggle={() => changeToggle()} />
        </m.nav>
      </div>
    </header>
  );
}

export default Header;
