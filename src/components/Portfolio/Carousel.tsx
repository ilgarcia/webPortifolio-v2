import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";

import { RubberTitle } from "../Ui/RubberTitles";
import { urlForImage } from "../../../sanity/lib/image";
import { HoverRightIndigoLink } from "../Ui/UIControls";

import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { carousel, dotButton } from "./MotionVariants";
import { flushSync } from "react-dom";

type Props = {
  portfolio: Portfolio[];
  options?: EmblaOptionsType;
};

const TWEEN_FACTOR = 1.1;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

function Carousel({ portfolio, options }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);
  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onInit, onSelect, onScroll]);

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <m.div variants={carousel} className="relative w-screen">
        <div className="overflow-hidden" ref={emblaRef}>
          <div
            className="flex touch-pan-y -ml-4"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative flex flex-[0_0_100%] items-center">
              <div
                className="max-w-6xl mx-auto pl-4 transition-all duration-700 "
                style={{
                  ...(tweenValues.length && {
                    transform: `scale(${tweenValues[selectedIndex]})`,
                  }),
                }}
              >
                <div className="flex flex-col items-center space-y-6 md:space-y-8">
                  <RubberTitle
                    title={"Portfolio & Previous Projects"}
                    elementType={"h3"}
                    classProps={"justify-center"}
                  />
                  <p className="max-w-lg text-center">
                    Welcome to my portfolio. As a web developer, I embark on a
                    journey to bring visions to life, every detail is carefully
                    considered to create the best user experience. Explore my
                    work, and if you like what you see, feel free to contact me!
                  </p>
                  <HoverRightIndigoLink
                    link={"/blog#moreProjects"}
                    title={"More Projects"}
                  />
                </div>
              </div>
            </div>
            {portfolio?.map((project, id) => (
              <div key={id} className="relative flex-[0_0_100%] pl-4">
                <div
                  className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center px-2 md:px-8 relative"
                  style={{
                    ...(tweenValues.length && {
                      transform: `scale(${tweenValues[selectedIndex]})`,
                    }),
                  }}
                >
                  <div
                    className={`order-last ${
                      (id + 1) % 2 !== 0 && "lg:order-none"
                    } relative lg:static bottom-28 z-20 max-w-2xl mx-auto w-full`}
                  >
                    <p className="text-center lg:text-start lg:mb-6 text-lg lg:text-xl text-slate-400 font-light  mt-3">
                      {project.appType.title.toUpperCase()}
                    </p>
                    <RubberTitle
                      title={project.title}
                      classProps={"justify-center lg:justify-start"}
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
                        <HoverRightIndigoLink
                          link={project.githubLink}
                          title={"Github"}
                        />
                      )}
                      {project.externalLink && (
                        <HoverRightIndigoLink
                          link={project.externalLink}
                          title={"Application"}
                        />
                      )}
                      {project.post?.slug && <m.a href={""}>Post</m.a>}
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
      </m.div>
      {portfolio.length > 0 && (
        <m.div
          variants={dotButton}
          className="absolute z-30 flex items-center space-x-8 -translate-x-1/2 bottom-[15%] left-1/2"
        >
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
        </m.div>
      )}
    </m.div>
  );
}

export default Carousel;
