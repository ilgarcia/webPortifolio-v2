import { motion as m } from "framer-motion";
import { neonBorder } from "./Variants";

function NeonBorder() {
  return (
    <m.div variants={neonBorder} className="relative -z-10">
      <div className="absolute bottom-0 right-4 mt-[2px] flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-screen -scale-x-100">
          <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        </div>
      </div>
    </m.div>
  );
}

export default NeonBorder;
