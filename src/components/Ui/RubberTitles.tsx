import React from "react";

import { cn } from "../../lib/utils";
export interface RubberTitleProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
  elementType?: string;
  title: string;
}

const RubberTitle: React.FC<RubberTitleProps> = ({
  elementType,
  title,
  ...props
}) => {
  const Element = elementType || "h1";

  return React.createElement(
    Element,
    null,
    <div
      className={cn(
        "text-4xl lg:text-6xl font-bold lg:leading-10 flex flex-wrap space-x-2 lg:space-x-5",
        props.className
      )}
    >
      {title.split(" ").map((word, idW) => (
        <div key={idW} className="cursor-pointer flex lg:mb-4">
          {word.split("").map((character, idC) => (
            <span
              key={idC}
              className="hover:text-orange-400 hover:animate-rubberBand hover:duration-1000"
            >
              {character}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export { RubberTitle };
