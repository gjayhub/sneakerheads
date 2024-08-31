"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";

export default function PriceRange() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isMountRef = useRef(true);
  const minPriceInitial = parseInt(searchParams.get("minPrice") || "1000");
  const maxPriceInitial = parseInt(searchParams.get("maxPrice") || "10000");

  const [minPrice, setMinPrice] = useState(minPriceInitial);
  const [maxPrice, setMaxPrice] = useState(maxPriceInitial);
  const [debouncedMinPrice] = useDebounce(minPrice, 200);
  const [debouncedMaxPrice] = useDebounce(maxPrice, 200);

  useEffect(() => {
    if (!isMountRef.current) {
      // Only push the route if there is a valid filter
      if (debouncedMinPrice !== 1000 || debouncedMaxPrice !== 10000) {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("page");
        params.set("minPrice", debouncedMinPrice.toString());
        params.set("maxPrice", debouncedMaxPrice.toString());
        router.push(`${pathname}?${params.toString()}`);
      }
    } else {
      isMountRef.current = false; // Set it to false after the initial mount
    }
  }, [pathname, router, searchParams, debouncedMinPrice, debouncedMaxPrice]);

  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    const numberValue = Number(numericValue);

    if (numberValue <= minPrice + 1000) {
      return setMaxPrice(minPrice + 1000);
    }
    if (numberValue <= 10000 || numericValue === "") {
      setMaxPrice(Number(numericValue));
    }
  };

  const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = Number(value);

    if (maxPrice - numberValue >= 1000) {
      setMinPrice(numberValue);
    }
  };
  const minPercent = (minPrice / 10000) * 100;
  const maxPercent = 100 - (maxPrice / 10000) * 100;

  return (
    <div className='pr-4'>
      <h6 className='mb-1'>Price</h6>

      <div className='grid grid-cols-[1fr_auto_1fr] gap-2 items-center'>
        <div className='flex flex-col'>
          <span className='text-sm text-center'>Min</span>
          <input
            type='text'
            maxLength={6}
            value={minPrice}
            readOnly
            className='w-full text-xs text-slate-500 p-1 border border-gray-300 rounded outline-none text-center [-moz-appearance:textfield]  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          />
        </div>
        <div className='text-center h-full pt-4 text-[1.7rem]'>-</div>
        <div className='flex flex-col'>
          <span className='text-sm text-center'>Max</span>
          <input
            type='text'
            maxLength={6}
            readOnly
            value={maxPrice}
            className='w-full text-xs text-slate-500 p-1 border border-gray-300 rounded outline-none text-center [-moz-appearance:textfield]  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          />
        </div>
      </div>

      <div className='mt-2 h-2 bg-gray-200 rounded relative'>
        <div
          className='h-full bg-black rounded absolute'
          style={{ left: `${minPercent}%`, right: `${maxPercent}%` }}
        ></div>

        <div className='flex relative'>
          <input
            onChange={handleMinPrice}
            type='range'
            className='w-full pointer-events-none absolute h-2 [background:none] [-webkit-appearance:none] 
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:[-webkit-appearance:none] 
            [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:pointer-events-auto
            [-moz-appearance:none] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-track]:bg-transparent'
            min={0}
            max={10000}
            value={minPrice}
          />
          <input
            onChange={handleMaxPrice}
            type='range'
            className='w-full pointer-events-none absolute h-2 [background:none] [-webkit-appearance:none] 
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:[-webkit-appearance:none] 
            [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:pointer-events-auto
            [-moz-appearance:none] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-track]:bg-transparent'
            min={0}
            max={10000}
            value={maxPrice}
          />
        </div>
      </div>
    </div>
  );
}
