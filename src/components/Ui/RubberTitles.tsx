import React from "react";

type Props = {
  title: string;
  classProps?: string;
};

export interface RubberTitleProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
  elementType?: string;
  title: string;
  classProps?: string;
}

const RubberTitle: React.FC<RubberTitleProps> = ({
  elementType,
  title,
  classProps,
}) => {
  const Element = elementType || "h1";

  return React.createElement(
    Element,
    null,
    <div
      className={`text-4xl lg:text-6xl font-bold lg:leading-10 flex flex-wrap space-x-2 lg:space-x-5 ${
        classProps && classProps
      }`}
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