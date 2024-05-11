type Props = {
  title: string;
  Icon: any;
};

function Badges({ title, Icon }: Props) {
  return (
    <div className="flex flex-col items-center gap-1.5 md:gap-2.5 h-fit w-20 lg:w-28 py-3 lg:py-5 text-orange-400 bg-slate-900 text-sm rounded-ss-2xl border-b-4 border-orange-400 border-solid transition-all duration-300 hover:z-10 hover:scale-125 active:scale-95">
      <p>{title}</p>
      {Icon} 
    </div>
  );
}

export default Badges;
