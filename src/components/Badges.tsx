import * as Si from "react-icons/si";

type Props = {
  skill: Skill;
};

function Badges({ skill }: Props) {
  function dynamicIcon(icon: string): JSX.Element {
    const IconComponent = Si[icon as keyof typeof Si];
    return <IconComponent className="text-3xl lg:text-4xl" />;
  }

  return (
    <div className="flex flex-col items-center gap-3 h-fit w-24 lg:w-28 py-5 text-orange-400 bg-slate-900 text-sm rounded-ss-2xl border-b-4 border-orange-400 border-solid ease-in-out transition-transform duration-300 hover:scale-125 hover:z-10">
      <p>{skill.title}</p>
      {dynamicIcon(skill.icon)}
    </div>
  );
}

export default Badges;
