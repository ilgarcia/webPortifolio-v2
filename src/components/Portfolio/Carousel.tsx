"use client";

import { useState, useCallback, useEffect } from "react";
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
        <div className="overflow-hidden" ref={emblaRef}>
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
              <div key={id} className="relative flex-[0_0_100%] pl-4">
                <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center px-2 md:px-8 relative">
                  <div
                    className={`order-last ${
                      (id + 1) % 2 !== 0 && "lg:order-none"
                    } relative lg:static bottom-28 z-20 max-w-2xl mx-auto w-full`}
                  >
                    <p className="text-center lg:text-start lg:mb-1 lg:-ml-4 text-lg lg:text-xl text-slate-400 font-light mt-3">
                      {project.appType.title.toUpperCase()}
                    </p>
                    <RubberTitle
                      title={project.title}
                      className="justify-center lg:justify-start lg:text-5xl"
                      elementType={"h3"}
                    />
                    <div className="flex flex-col space-y-3 lg:space-y-5 py-2 lg:py-6 text-center lg:text-start ">
                      <p>{project.description}</p>
                      <p>
                        <span className="font-extrabold mr-1.5">
                          Built with:
                        </span>
                        {project.skill?.map((data) => (
                          <span key={data._id} className="font-light mr-1.5">
                            {data.title}
                          </span>
                        ))}
                      </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start space-y-2">
                      {project.githubLink && (
                        <Button variant={"indigoLink"} arrow={"right"} >
                          <Link href={project.githubLink}>Github</Link>
                        </Button>
                      )}
                      {project.externalLink && (
                        <Button variant={"indigoLink"} arrow={"right"} >
                          <Link href={project.externalLink}>Application</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="h-full">
                    <div className="relative top-20 lg:top-auto lg:h-96 lg:w-full aspect-square lg:aspect-auto max-w-xs lg:max-w-xl rounded-full lg:rounded-none overflow-hidden lg:overflow-auto mx-auto">
                      <div className="bg-indigo-950/70 lg:hidden w-full h-full relative z-10" />
                      <Image
                        src={urlForImage({ ...project.mainImage }).url()}
                        alt={project.mainImage.alt}
                        fill
                        sizes="100%"
                        className="object-cover lg:object-contain relative lg:static"
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
