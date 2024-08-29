import Image from "next/image";
import React from "react";
type ProductCardType = {
  name: string;
  image: string;
  id: number;
  price: number;
  brand: string;
};
export default function ProductCard({
  name,
  image,
  id,
  price,
  brand,
}: ProductCardType) {
  return (
    <div className=''>
      <div className='relative [&>p]:hover:bottom-2'>
        <Image
          className='object-cover lg:h-[250px] md:h-[200px] h-[150px]  aspect-square w-full '
          src={image}
          alt={name}
          height={200}
          width={200}
        />
        <p className='absolute bottom-1 left-1  transition-all bg-white rounded-[5px] px-2'>
          {" "}
          ₱ : <span className='text-sm '>{price}</span>
        </p>
      </div>

      <h6 className='text-lg font-bold text-neutral-600  '>{name}</h6>
      <p>{brand}</p>
    </div>
  );
}
