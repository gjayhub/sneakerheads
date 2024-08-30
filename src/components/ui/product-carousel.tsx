"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ShoeTypes } from "@/utils/types/shoeTypes";
import ProductCard from "./product-card";

export default function ProductCarousel({ shoes }: { shoes: ShoeTypes[] }) {
  return (
    <Carousel
      arrows
      className='pr-2'
      containerClass='max-w-[1300px] mx-auto'
      dotListClass=''
      focusOnSelect={false}
      infinite={false}
      itemClass='px-1'
      ssr={true}
      keyBoardControl
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      swipeable
      partialVisible
      draggable={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 4,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 2,
          partialVisibilityGutter: 10,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      showDots={false}
      sliderClass=''
    >
      {shoes.map((shoe, idx) => (
        <ProductCard
          brand={shoe.brand}
          id={shoe.id}
          image={shoe.images[0]}
          name={shoe.name}
          price={shoe.price}
          key={shoe.id}
        />
      ))}
    </Carousel>
  );
}
