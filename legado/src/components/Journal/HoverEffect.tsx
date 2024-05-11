import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

type Props = {
  id: number;
  children: React.ReactNode;
};

function HoverEffect({ children, id }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="relative group block p-3 h-72 w-full "
      onMouseEnter={() => setHoveredIndex(id)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === id && (
          <m.span
            className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-md"
            layoutId="hoverBackground" // required for the background to follow
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <div className=" rounded h-full w-full p-6 bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-10">
        {children}
      </div>
    </div>
  );
}

export default HoverEffect;
