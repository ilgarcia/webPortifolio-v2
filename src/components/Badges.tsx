import { SiReact } from "react-icons/si";

function Badges() {
  return (
    <div className="flex flex-col items-center gap-3 h-fit w-24 lg:w-28 py-5 text-orange-400 bg-slate-900 text-sm rounded-ss-2xl border-b-4 border-orange-400 border-solid ease-in-out transition-transform duration-500 hover:scale-125 hover:z-10">
      <p>React</p>
      <SiReact className="text-3xl lg:text-4xl"/>
    </div>
  );
}

export default Badges;
