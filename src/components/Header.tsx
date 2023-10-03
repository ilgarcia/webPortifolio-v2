"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion as m, Variants, useCycle } from "framer-motion";

import { NavigationToggle } from "@/components/NavigationToggle";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";

const sidebarVariant: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 44px) 30.5px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(20px at calc(100% - 44px) 30.5px)`,
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
  const [isDesktop, setIsDesktop] = useState(true);

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

  function changeToggle() {
    document.body.classList.toggle("toggleBlur");
    toggleOpen();
  }

  return (
    <m.header className="absolute top-0 left-0 lg:pt-3 w-screen z-40 bg-theme-dark lg:bg-transparent">
      <div className="flex items-center max-w-8xl mx-auto px-8 2xl:px-0 py-4">
        <Logo />
        <m.nav
          className="flex flex-1 justify-end"
          initial={false}
          animate={isOpen || isDesktop ? "open" : "closed"}
        >
          <m.div
            className="fixed top-0 bottom-0 right-0 h-screen [width:min(70vw,300px)] bg-indigo-950 outline-0 shadow-2xl lg:hidden z-10"
            variants={sidebarVariant}
          />
          <Navigation />
          <NavigationToggle toggle={() => changeToggle()} />
        </m.nav>
      </div>

      <div className="z-0 lg:hidden">
        <div className="absolute bottom-0 right-4 mt-[2px] flex h-8 items-end overflow-hidden">
          <div className="flex -mb-px h-[2px] w-screen -scale-x-100">
            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          </div>
        </div>
      </div>
    </m.header>
  );
}

export default Header;
