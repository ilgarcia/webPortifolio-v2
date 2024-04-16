import Link from "next/link";
import { motion as m } from "framer-motion";

import NavItem from "./NavItem";
import { Button } from "../Ui/Button";
import { navItems, blogLink } from "./MotionVariants";
import { navLinks } from "../../data/constants";
import { cn } from "../../lib/utils";
import { SocialList } from "../Ui/SocialLinks";

type Props = {
  toggle: () => void;
  open: boolean;
};

function Navbar({ toggle, open }: Props) {
  return (
    <m.nav
      variants={navItems}
      className={cn(
        "absolute top-full lg:static flex-col lg:flex-row justify-center items-center right-0 [width:min(70vw,300px)] lg:w-fit font-fira text-base lg:text-sm lg:space-x-7 space-y-5 lg:space-y-0 z-50",
        open ? "flex" : "hidden lg:flex"
      )}
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
      {/* <m.div variants={blogLink}>
        <Button>
          <Link href={"/journal"} onClick={toggle}>
            Blog
          </Link>
        </Button>
      </m.div>
      <SocialList className="lg:hidden -z-10" /> */}
    </m.nav>
  );
}

export default Navbar;
