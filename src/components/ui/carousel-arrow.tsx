"use client";

import { useCarousel } from "@/utils/store/useCarousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function CarouselArrow() {
  const { next, prev } = useCarousel();

  return (
    <>
      <button
        onClick={prev}
        className='md:w-[50px] md:h-[50px] w-[30px] h-[30px]  border flex justify-center items-center pr-1 border-slate-400 drop-shadow-sm text-slate-400 rounded-full pointer-events-auto transition-all hover:bg-slate-300'
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className='md:w-[50px] md:h-[50px] w-[30px] h-[30px]  border flex justify-center items-center pl-1 border-slate-400 drop-shadow-sm text-slate-400 rounded-full pointer-events-auto transition-all hover:bg-slate-300'
      >
        <ChevronRight />
      </button>
    </>
  );
}
