import { DynamicIconSi, DynamicIconFa } from "../Ui/DynamicIcon";


type Props = {
  skill: Skill;
};

function Badges({ skill }: Props) {
  const icon = skill.icon.split('.')

  return (
    <div className="flex flex-col items-center gap-1.5 md:gap-2.5 h-fit w-20 lg:w-28 py-3 lg:py-5 text-orange-400 bg-slate-900 text-sm rounded-ss-2xl border-b-4 border-orange-400 border-solid ease-in-out transition-transform duration-300 hover:scale-125 hover:z-10">
      <p>{skill.title}</p>
      {icon[0] === "Si" ? DynamicIconSi(icon[1]) : DynamicIconFa(icon[1])}
    </div>
  );
}

export default Badges;
