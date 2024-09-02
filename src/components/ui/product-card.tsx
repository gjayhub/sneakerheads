import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
type ProductCardType = {
  name: string;
  image: string;
  id: number;
  price: number;
  brand: string;
  cardContainer?: string;
  imageContainerStyle?: string;
  imgStyle?: string;
};
export default function ProductCard({
  name,
  image,
  id,
  price,
  brand,
  cardContainer,
  imageContainerStyle,
  imgStyle,
}: ProductCardType) {
  return (
    <div className={cn("w-full", cardContainer)}>
      <div
        className={cn("relative [&>p]:hover:bottom-2 ", imageContainerStyle)}
      >
        {/**/}
        <Image
          className={cn(
            "object-cover transition-transform hover:scale-105 lg:h-[350px] md:h-[250px] h-[200px]  aspect-square w-full ",
            imgStyle
          )}
          src={image}
          alt={name}
          width={300}
          height={300}
        />
        <p className='absolute bottom-1 left-1  transition-all bg-white rounded-[5px] px-2'>
          ₱ : <span className='text-sm '>{price}</span>
        </p>
      </div>

      <h6 className='text-lg font-bold text-neutral-600 text-wrap w-'>
        {name}
      </h6>
      <p>{brand}</p>
    </div>
  );
}
