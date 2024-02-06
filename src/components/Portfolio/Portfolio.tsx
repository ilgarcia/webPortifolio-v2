"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";

import Carousel from "./Carousel";
import { RubberTitle } from "../Ui/RubberTitles";
import { urlForImage } from "../../../sanity/lib/image";
import { HoverRightIndigoLink } from "../Ui/UIControls";

import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

type Props = {
  portfolio: Portfolio[];
};

function Portfolio({ portfolio }: Props) {
  return (
    <section
      id="portfolio"
      className="relative flex items-center h-screen lg:snap-start"
    >
      <h2 className="absolute -rotate-90 bottom-1/2 translate-y-1/2 -translate-x-1/2 left-8 md:left-14  font-fira text-7xl md:text-8xl tracking-tighter text-slate-800/90 font-medium">
        Portfolio.
      </h2>
      <Carousel portfolio={portfolio} />
    </section>
  );
}

export default Portfolio;
