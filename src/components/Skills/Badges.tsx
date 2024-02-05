import { DynamicIconSi, DynamicIconFa } from "../Ui/DynamicIcon";
import { motion as m } from "framer-motion";
import { badges } from "./MotionVariants";

type Props = {
  skill: Skill;
};

function Badges({ skill }: Props) {
  const icon = skill.icon.split(".");

  return (
    <m.div
      variants={badges}
      whileHover={{ zIndex: 10, scale: 1.25 }}
      whileTap={{ zIndex: 10, scale: 0.95 }}
      className="flex flex-col items-center gap-1.5 md:gap-2.5 h-fit w-20 lg:w-28 py-3 lg:py-5 text-orange-400 bg-slate-900 text-sm rounded-ss-2xl border-b-4 border-orange-400 border-solid"
    >
      <p>{skill.title}</p>
      {icon[0] === "Si" ? DynamicIconSi(icon[1]) : DynamicIconFa(icon[1])}
    </m.div>
  );
}

export default Badges;
