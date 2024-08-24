import { shoes } from "@/utils/data";
import React from "react";
import ProductCarousel from "./ui/product-carousel";

export default function TrendingShoes() {
  const shuffledShoes = shoes.sort(() => 0.5 - Math.random()).slice(0, 8);
  return (
    <section className='max-w-[1200px] mx-auto'>
      <h1 className='text-center md:text-left py-5 overflow-hidden'>
        Trending
      </h1>
      <ProductCarousel shoes={shuffledShoes} />
    </section>
  );
}
