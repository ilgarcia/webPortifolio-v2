import React from "react";

type Props = {
  title: string;
  classProps?: string;
};

export function RubberTitleH1({ title, classProps }: Props) {
  return (
    <h1
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
    </h1>
  );
}

export function RubberTitleH2({ title, classProps }: Props) {
  return (
    <h2
      className={`text-4xl lg:text-6xl font-bold lg:leading-10 flex flex-wrap ${
        classProps && classProps
      }`}
    >
      {title.split(" ").map((word, idW) => (
        <div key={idW} className="cursor-pointer flex mr-2 lg:mr-5 lg:mb-4">
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
    </h2>
  );
}

export function RubberTitleH3({ title, classProps }: Props) {
  return (
    <h3
      className={`text-4xl lg:text-6xl font-bold lg:leading-10 flex flex-wrap ${
        classProps && classProps
      }`}
    >
      {title.split(" ").map((word, idW) => (
        <div key={idW} className="cursor-pointer flex mr-2 lg:mr-5 lg:mb-4">
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
    </h3>
  );
}
