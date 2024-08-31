"use client";
import React, { useEffect, useState } from "react";
import Button from "./button";
import Image from "next/image";
import { animate, AnimatePresence, motion } from "framer-motion";
import { useCarousel } from "@/utils/store/useCarousel";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Carousel() {
  const { current, animationDirection, next } = useCarousel();
  const router = useRouter();
  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [current]);

  const container = {
    hidden: {
      x: `calc(100vw * ${animationDirection == "right" ? "-1" : "1"}`,
      opacity: 0,
    },
    show: { x: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      <motion.div
        key={current.id}
        variants={container}
        initial='hidden'
        animate='show'
        transition={{ duration: 0.5 }}
        className='w-[100vw] max-w-[1200px] mx-auto h-full z-10 relative'
      >
        <h1
          className={cn(
            "absolute inset-0  font-leage-gothic uppercase text-center [font-size:clamp(10rem,10vw,17rem)] md:text-header top-[12%]",
            current.className
          )}
        >
          {current.brand}
        </h1>

        <div className={`absolute inset-0 `}>
          <figure
            className='absolute w-[70%] top-[50%] transform -translate-y-1/2 
   before:absolute before:w-full before:bg-black before:h-[100px] before:top-[90%] before:left-[50px] before:blur-[80px] before:rounded-[50%]'
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: -30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                className='w-full '
                src={current.image}
                alt='Nike JA Shoes'
                height={400}
                width={400}
              />
            </motion.div>
          </figure>
          <motion.div className='absolute z-20 md:max-w-[28%] h-full top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-0  md:-translate-y-[60%] flex flex-col justify-center items-end gap-4 md:gap-8'>
            <motion.h3
              initial={{
                x: `calc(100vw * ${animationDirection == "right" ? "-1" : "1"}`,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0 }}
              className='font-leage-gothic font-extrabold lg:text-5xl text-3xl leading-[1em]'
            >
              {current.name}
            </motion.h3>
            <motion.p
              initial={{
                x: `calc(100vw * ${animationDirection == "right" ? "-1" : "1"}`,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className='lg:text-xl text-lg'
            >
              ₱ : <span className='font-extrabold'>{current.price}</span>
            </motion.p>
            <motion.div
              initial={{
                x: `calc(100vw * ${animationDirection == "right" ? "-1" : "1"}`,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className='grid grid-cols-2 gap-4 '
            >
              <Button
                className='col-span-1 text-sm lg:text-base'
                type='primary'
              >
                BUY
              </Button>

              <Button
                onClick={() => router.push(`/shoes?brand=${current.brand}`)}
                className='col-span-1  text-sm lg:text-base'
                type='secondary'
              >
                SHOW MORE
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
