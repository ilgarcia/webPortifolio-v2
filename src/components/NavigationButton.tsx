import { motion as m } from "framer-motion";

type Props = {
  item: string;
};

const variants = {
  open: {
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
  },
};

function NavigationButton({ item }: Props) {
  return (
    <m.div
      className="w-fit border border-solid border-orange-400 shadow-[4px_4px] shadow-orange-400 text-orange-400 font-semibold rounded py-1.5 px-5 xl:px-8 text-xs xl:text-sm ease-in-out duration-200 hover:shadow-[2px_2px] hover:translate-x-[2px] hover:translate-y-[2px]"
      variants={variants}
    >
      {item}
    </m.div>
  );
}

export default NavigationButton;
