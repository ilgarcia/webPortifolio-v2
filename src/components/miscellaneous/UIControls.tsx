"use client";

import Link from "next/link";
import { motion as m, Variants } from "framer-motion";

import { BiCaretRight } from "react-icons/bi";

// Styled Links

type SolidOrangeLinkProps = {
  variants: Variants;
  link: string;
  title: string;
};

export function SolidOrangeLink({
  variants,
  link,
  title,
}: SolidOrangeLinkProps) {
  return (
    <m.div variants={variants}>
      <Link
        href={link}
        className="w-fit border border-solid border-orange-400 shadow-[4px_4px] shadow-orange-400 text-orange-400 font-semibold rounded py-1.5 px-5 xl:px-8 text-xs xl:text-sm ease-in-out duration-200 hover:shadow-[2px_2px] hover:translate-x-[2px] hover:translate-y-[2px]"
      >
        {title}
      </Link>
    </m.div>
  );
}

type HoverDownOrangeLinkProps = {
  link: string;
  title: string;
};

const arrowDownVariant: Variants = {
  hoverIn: { rotate: 90 },
  hoverOut: { rotate: 0 },
};

export function HoverDownOrangeLink({ link, title }: HoverDownOrangeLinkProps) {
  return (
    <m.div initial="hoverOut" whileHover="hoverIn" className="w-fit">
      <Link
        href={link}
        className="flex items-center text-orange-400 font-medium "
      >
        <span className="mr-3">{title}</span>
        <m.span variants={arrowDownVariant}>
          <BiCaretRight className="text-xl" />
        </m.span>
      </Link>
    </m.div>
  );
}

type HoverRightIndigoLinkProps = {
  link: string;
  title: string;
  initial?: boolean;
};

const arrowRightVariant: Variants = {
  hoverIn: {
    x: 5,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.5,
    },
  },
  hoverOut: { x: 0 },
};

export function HoverRightIndigoLink({
  link,
  title,
  initial = true,
}: HoverRightIndigoLinkProps) {
  return (
    <>
      {initial ? (
        <m.div initial="hoverOut" whileHover="hoverIn" className="w-fit">
          <Link
            href={link}
            className="flex items-center text-indigo-500 font-medium"
          >
            <span className="mr-2">{title}</span>
            <m.span variants={arrowRightVariant}>
              <BiCaretRight className="text-xl" />
            </m.span>
          </Link>
        </m.div>
      ) : (
        <div className="flex items-center text-indigo-500 font-medium">
          <span className="mr-2">{title}</span>
          <m.span variants={arrowRightVariant}>
            <BiCaretRight className="text-xl" />
          </m.span>
        </div>
      )}
    </>
  );
}

// Styled Buttons

type SolidIndigoButtonProps = {
  title: string;
};

export function SolidIndigoButton({ title }: SolidIndigoButtonProps) {
  return (
    <button
      type="submit"
      className="w-full border border-solid bg-slate-900 border-indigo-500 shadow-[4px_4px] shadow-indigo-500 text-indigo-500 font-semibold rounded py-2 px-5 ease-in-out duration-200 hover:shadow-[2px_2px] "
    >
      {title}
    </button>
  );
}
