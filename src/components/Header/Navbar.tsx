import { motion as m } from "framer-motion";

import NavItem from "./NavItem";
import MobileSocials from "../Socials/MobileSocials";
import { SolidOrangeLink } from "../Ui/UIControls";
import {
  navItems,
  mobileSocials,
  blogLink,
} from "./MotionVariants";

import { navLinks } from "../../data/constants";

type Props = {
  toggle: () => void;
  open: boolean;
};

function Navbar({ toggle, open }: Props) {
  return (
    <m.div
      variants={navItems}
      className={`${
        open ? "flex" : "hidden lg:flex"
      } absolute top-full lg:static flex-col lg:flex-row justify-center items-center right-0 [width:min(70vw,300px)] lg:w-fit font-fira text-base lg:text-sm lg:space-x-7 space-y-5 lg:space-y-0 z-50`}
    >
      <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
        {navLinks.map((item) => (
          <NavItem
            key={item.id}
            id={item.id}
            title={item.title}
            toggle={toggle}
          />
        ))}
      </ul>
      <SolidOrangeLink
        title={"Blog"}
        link={"/journal?tab=posts"}
        variants={blogLink}
        toggle={toggle}
      />
      <MobileSocials variants={mobileSocials} />
    </m.div>
  );
}

export default Navbar;
