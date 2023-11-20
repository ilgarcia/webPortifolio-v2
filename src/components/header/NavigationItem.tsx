import { motion as m } from "framer-motion";

const variants = {
  open: {
    display: "block",
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    transitionEnd: { display: "none" },
  },
};

type Props = {
  title: string;
  id: string;
  toggle: () => void;
};

function NavigationItem({ id, title, toggle }: Props) {
  return (
    <m.li
      className={`nav-link`}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={`/#${id}`} onClick={toggle}>
        {title}
      </a>
    </m.li>
  );
}

export default NavigationItem;
