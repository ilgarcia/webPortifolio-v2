import { motion as m } from "framer-motion";

import NavigationItem from "@/components/header/NavigationItem";
import NavigationButton from "@/components/header/NavigationButton";
import NavigationSocials from "./NavigationSocials";

type Props = {
  toggle: () => void;
  open: boolean;
};

const items = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

function Navigation({ toggle, open }: Props) {
  return (
    <m.div
      className={`${
        open ? "flex" : "hidden lg:flex"
      } absolute top-full lg:static  flex-col lg:flex-row justify-center items-center right-0 [width:min(70vw,300px)] lg:w-fit font-fira text-base lg:text-sm lg:space-x-7 space-y-5 lg:space-y-0 z-50`}
      variants={variants}
    >
      <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
        {items.map((item) => (
          <NavigationItem
            key={item.id}
            id={item.id}
            title={item.title}
            toggle={toggle}
          />
        ))}
      </ul>
      <NavigationButton title={"Blog"} link={"blog"} />
      <NavigationSocials />
    </m.div>
  );
}

export default Navigation;
