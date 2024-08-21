"use client";

import { useCarousel } from "@/utils/store/useCarousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function CarouselArrow() {
  const { next, prev } = useCarousel();

  return (
    <>
      <button
        onClick={next}
        className='w-[50px] h-[50px] border flex justify-center items-center pr-1 border-slate-400 drop-shadow-sm text-slate-400 rounded-full pointer-events-auto transition-all hover:bg-slate-300'
      >
        <ChevronLeft />
      </button>
      <button
        onClick={prev}
        className='w-[50px] h-[50px] border flex justify-center items-center pl-1 border-slate-400 drop-shadow-sm text-slate-400 rounded-full pointer-events-auto transition-all hover:bg-slate-300'
      >
        <ChevronRight />
      </button>
    </>
  );
}
