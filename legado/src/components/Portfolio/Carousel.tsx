"use client";

import { useState, useCallback, useEffect } from "react";
import { FiGithub, FiLink, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { RubberTitle } from "../Ui/RubberTitles";
import { urlForImage } from "../../../sanity/lib/image";
import { Button } from "../Ui/Button";

type Props = {
  portfolio: Portfolio[];
  options?: EmblaOptionsType;
};

function Carousel({ portfolio, options }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="relative w-screen">
        <div ref={emblaRef}>
          <div
            className="flex touch-pan-y -ml-4"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative flex flex-[0_0_100%] items-center">
              <div className="max-w-6xl mx-auto pl-4 transition-all duration-700 ">
                <div className="flex flex-col items-center space-y-6 md:space-y-8">
                  <RubberTitle
                    title={"Portfolio & Previous Projects"}
                    elementType={"h3"}
                    className="justify-center"
                  />
                  <p className="max-w-lg text-center">
                    Welcome to my portfolio. As a web developer, I embark on a
                    journey to bring visions to life, every detail is carefully
                    considered to create the best user experience. Explore my
                    work, and if you like what you see, feel free to contact me!
                  </p>
                  <Button variant={"indigoLink"} arrow={"right"}>
                    <Link href={"/journal"}>More Projects</Link>
                  </Button>
                </div>
              </div>
            </div>
            {portfolio?.map((project, id) => (
              <div key={id} className="relative flex-[0_0_100%] pl-4 ">
                <div className="absolute hidden lg:block inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.70] bg-red-500 rounded-full blur-3xl" />
                <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-11 gap-16 px-2 md:px-12 relative lg:shadow-xl lg:bg-gray-900 lg:border lg:border-gray-800 m-2 lg:rounded-2xl lg:transition-all lg:duration-300 lg:hover:brightness-110">
                  <div
                    className={`order-last ${
                      (id + 1) % 2 !== 0 && "lg:order-none"
                    } lg:col-span-5 relative bottom-36 lg:bottom-auto z-20 max-w-2xl mx-auto w-full p-5 lg:py-10 bg-gray-900/80 rounded-2xl transition-all duration-300 hover:brightness-125 lg:bg-none lg:hover:brightness-100`}
                  >
                    <p className="text-center lg:text-start lg:-ml-3 text-base text-orange-400 font-medium mt-3">
                      {project.appType.title.toUpperCase()}
                    </p>
                    <RubberTitle
                      title={project.title}
                      className="justify-center lg:justify-start lg:text-4xl"
                      elementType={"h3"}
                    />
                    <div className="flex flex-col py-2 lg:pb-4 text-center lg:text-start ">
                      <p className="p-3 lg:border-l-4 border-solid border-indigo-500/30">
                        {project.description}
                      </p>
                      {project.skill && (
                        <p className="mt-5 lg:mt-10">
                          <span className="font-extrabold mr-1">
                            Built with:
                          </span>
                          {project.skill.map((data, idw) => (
                            <span key={data._id} className="font-light mr-1">
                              {data.title}{" "}
                              {project.skill.length - 1 !== idw ? ", " : ""}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                    <div
                      className={`absolute top-2 right-6 lg:top-auto lg:bottom-10 flex items-center gap-5 text-2xl mt-4 text-indigo-500 ${
                        (id + 1) % 2 === 0 ? "lg:right-4" : "lg:right-auto"
                      }`}
                    >
                      {project.githubLink && (
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125"
                        >
                          <FiGithub />
                        </Link>
                      )}
                      {project.slug && (
                        <Link
                          href={`/journal/${project.slug.current}`}
                          className="ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125"
                        >
                          <FiLink />
                        </Link>
                      )}
                      {project.externalLink && (
                        <Link
                          href={project.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ease-in-out duration-500 hover:-translate-y-0.5 hover:brightness-125 focus:brightness-125"
                        >
                          <FiExternalLink />
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="h-full lg:col-span-6">
                    <div className="relative top-20 lg:top-auto lg:h-96 lg:w-full aspect-square lg:aspect-auto max-w-xs lg:max-w-xl rounded-3xl lg:rounded-none overflow-hidden lg:overflow-auto mx-auto ">
                      {/* <div className="bg-indigo-950/70 lg:hidden w-full h-full relative z-10" /> */}
                      <Image
                        src={urlForImage({ ...project.mainImage }).url()}
                        alt={project.mainImage.alt}
                        fill
                        sizes="100%"
                        className="object-cover lg:object-contain relative lg:static drop-shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {portfolio.length > 0 && (
        <div className="absolute z-30 flex items-center space-x-8 -translate-x-1/2 bottom-[15%] left-1/2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full bg-slate-700 duration-200 ease-in ${
                index === selectedIndex
                  ? "scale-[2.10] hover:scale-[1.75] bg-slate-400"
                  : "hover:scale-150"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Carousel;
