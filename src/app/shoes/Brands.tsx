import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Brands({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const BRANDS = [
    { name: "nike", img: "/logo/nike-logo.png" },
    { name: "adidas", img: "/logo/adidas-logo.png" },
    { name: "converse", img: "/logo/converse-logo.png" },
    { name: "vans", img: "/logo/vans-logo.svg" },
  ];

  // current URL: http://localhost:3000/shoes/nike?size=6%2C10%2C9%2C8.5%2C8%2C9.5%2C12%2C11%2C7&minPrice=2945&maxPrice=8885
  // if i click different brand eq vans it should push me to this link http://localhost:3000/shoes/vans?size=6%2C10%2C9%2C8.5%2C8%2C9.5%2C12%2C11%2C7&minPrice=2945&maxPrice=8885

  return (
    <div>
      <h6 className='mb-1'>Brand</h6>
      <div className='grid grid-cols-2'>
        {BRANDS.map((brand, idx) => (
          <Link
            href={{
              pathname: `/shoes/${brand.name}`,
              query: { ...searchParams },
            }}
            key={idx}
            className='ml-2 mb-4 '
          >
            <div className='w-fit [&>img]:hover:bg-slate-100 cursor-pointer'>
              <p className='capitalize text-gray-500 text-xs'>{brand.name}</p>
              <Image
                className={cn(
                  "object-contain h-[35px] w-[40px] rounded-[5px] border p-1"
                )}
                src={brand.img}
                alt='nike shoe logo'
                height={35}
                width={35}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
