"use client";
import Image from "next/image";
import React from "react";

import Button from "./button";

export default function ParallaxHero() {
  return (
    <div className='max-w-[1300px] h-full lg:h-screen mx-auto relative overflow-x-hidden'>
      <div className='absolute inset-0 flex  justify-center'>
        <h1 className='text-[10em] md:text-[20em] font-leage-gothic'>NIKE</h1>
      </div>
      <div className=' flex flex-col lg:flex-row justify-between mx-20'>
        <div className='h-fit '>
          <Image
            className='object-cover rotate-[-30deg] '
            src='/hero-images/nike.png'
            height={800}
            width={800}
            alt='Nike Ja Morant'
          />
        </div>
        <div className='min-w-[200px]'>
          <h1 className='text-5xl fade-in-45 '>JA 1EP dawdawd wadawf sdawa</h1>
          <div className='flex gap-5 mt-4 items-center'>
            <Button className='rounded-md min-w-fit flex-1' type='primary'>
              Buy
            </Button>
            <Button className='rounded-md min-w-fit flex-1 ' type='secondary'>
              Show more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
