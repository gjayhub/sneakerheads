import React from "react";
import ParallaxHero from "./ui/parallax-hero";
import Image from "next/image";
import Button from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel from "./ui/carousel";
import CarouselArrow from "./ui/carousel-arrow";
import CarouselIndicators from "./ui/carousel-indicators";

export default function HeroSection() {
  return (
    <section className='lg:h-screen md:h-[70vh] h-[60vh] bg-gradient-to-r from-slate-200 via-slate-50 to-slate-200 '>
      {/* List */}

      <Carousel />

      {/* arrows */}
      <div
        className='max-w-[1200px] w-[90vw] lg:top-1/2 top-[35%] absolute left-1/2 transform -translate-y-1/2 -translate-x-1/2
      z-20 flex justify-between'
      >
        <CarouselArrow />
      </div>
      <CarouselIndicators />
    </section>
  );
}
