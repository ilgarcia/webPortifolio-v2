"use client"

import { motion as m } from "framer-motion";

function Header() {
  return (
    <header className="sticky top-0 flex items-center max-w-7xl mx-auto px-12 xl:px-0 py-4 z-40">
      <m.div
        className="text-2xl font-neon drop-shadow-neon"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <a href="/#">
          L<span className="ml-0.5 text-orange-400">.</span>Garcia
          
        </a>
      </m.div>
      <nav className="flex flex-1 items-center justify-end space-x-8 font-fira text-xs">
        <ul className="flex items-center space-x-6 ">
          <li className="nav-link">
            <a href="#">About</a>
          </li>
          <li className="nav-link">
            <a>Projects</a>
          </li>
          <li className="nav-link">
            <a>Skills</a>
          </li>
          <li className="nav-link">
            <a>Experience</a>
          </li>
          <li className="nav-link">
            <a>Contact</a>
          </li>
        </ul>
        <a className="border border-solid border-orange-400 shadow-[4px_4px] shadow-orange-400 text-orange-400 font-semibold rounded py-1.5 px-5 ease-in-out duration-200 hover:shadow-[2px_2px] hover:translate-x-[2px] hover:translate-y-[2px]">
          Blog
        </a>
      </nav>
    </header>
  );
}

export default Header;
