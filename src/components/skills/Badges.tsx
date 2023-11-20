import * as Si from "react-icons/si";

type Props = {
  skill: Skill;
};

function Badges({ skill }: Props) {
  function dynamicIcon(icon: string): JSX.Element {
    const IconComponent = Si[icon as keyof typeof Si];
    return <IconComponent className="text-xl sm:text-2xl lg:text-4xl" />;
  }

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2.5 h-fit w-[4.5rem] sm:w-20 lg:w-28 py-3 lg:py-5 text-orange-400 bg-slate-900 text-xs lg:text-sm rounded-ss-2xl border-b-4 border-orange-400 border-solid ease-in-out transition-transform duration-300 hover:scale-125 hover:z-10">
      <p>{skill.title}</p>
      {dynamicIcon(skill.icon)}
    </div>
  );
}

export default Badges;
