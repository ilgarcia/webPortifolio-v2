import Link from "next/link";
import { motion as m } from "framer-motion";
import { navItem } from "./MotionVariants";

type Props = {
  title: string;
  id: string;
  toggle: () => void;
};

function NavItem({ id, title, toggle }: Props) {
  return (
    <m.li
      variants={navItem}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`nav-link`}
    >
      <Link href={`/#${id}`} onClick={toggle}>
        {title}
      </Link>
    </m.li>
  );
}

export default NavItem;
