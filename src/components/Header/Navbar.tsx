"use client";

import Link from "next/link";
import { motion as m, Variants } from "framer-motion";

import { Button } from "../Ui/Button";
import { navLinks } from "../../data/constants";

const variants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const buttonVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.9,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export function Navbar() {
  return (
    <m.nav
      initial="closed"
      animate="open"
      className="hidden lg:flex flex-row justify-center items-center font-fira text-sm space-x-7 z-50"
    >
      <m.ul
        variants={variants}
        className="flex items-center space-x-6"
      >
        {navLinks.map((item) => (
          <m.li key={item.id} variants={itemVariants} className="nav-link">
            <Link href={`/#${item.id}`}>{item.title}</Link>
          </m.li>
        ))}
        <m.div variants={buttonVariants}>
          <Button>
            <Link href={"/journal"}>Blog</Link>
          </Button>
        </m.div>
      </m.ul>
    </m.nav>
  );
}

type Props = {
  toggle: () => void;
};

export function SideNavbar({ toggle }: Props) {
  return (
    <nav className="flex flex-col font-fira text-base space-y-5">
      <m.ul variants={variants} className="flex flex-col space-y-4">
        {navLinks.map((item) => (
          <m.li key={item.id} variants={itemVariants} className="nav-link">
            <Link href={`/#${item.id}`} onClick={toggle}>
              {item.title}
            </Link>
          </m.li>
        ))}
      </m.ul>
      <m.div variants={buttonVariants}>
        <Button>
          <Link href={"/journal"} onClick={toggle}>
            Blog
          </Link>
        </Button>
      </m.div>
    </nav>
  );
}
