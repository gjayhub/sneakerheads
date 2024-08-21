"use client";

import { carouselItems, useCarousel } from "@/utils/store/useCarousel";
import React from "react";

export default function CarouselIndicators() {
  const { active, setCurrent } = useCarousel();
  const items = new Array(carouselItems.length).fill(null);
  return (
    <div className='absolute lg:top-[68%] top-[55%] z-20 left-1/2 h-[200px] w-[90vw] max-w-[1200px] transform -translate-x-1/2 flex flex-col justify-end gap-4 pointer-events-none'>
      <h1 className='font-leage-gothic text-5xl'>0{active}</h1>
      <ul className='flex gap-5'>
        {items.map((_, index) => (
          <li
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-[50px] h-[5px] rounded-md pointer-events-auto cursor-pointer transition-all ${
              active === index + 1 ? "bg-yellow-300" : "bg-black"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
}
