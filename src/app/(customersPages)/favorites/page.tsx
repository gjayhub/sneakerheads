import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import FavoritesList from "./_components/FavoritesList";

export default function FavoritesPage() {
  return (
    <div className='max-w-[1300px] mx-auto overflow-hidden'>
      <div className='relative w-fit max-w-[85vw]  mx-auto'>
        <Image
          className='absolute right-[-40%] -z-20 -rotate-45'
          src='/hero-images/adidas.png'
          alt=''
          width={150}
          height={150}
          style={{
            maskImage:
              "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          }}
        />

        <Image
          className='absolute left-[-40%] top-0 -z-20  rotate-45 scale-x-[-1]'
          src='/hero-images/converse.png'
          alt=''
          width={150}
          height={150}
          style={{
            maskImage:
              "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          }}
        />

        <h3 className='mt-20 text-center'>Your Favorites</h3>
        <h3 className='text-center'>Collection</h3>
      </div>
      <h6 className='text-center mt-10'>
        Save the shoes you love and easily access them anytime, anywhere.
      </h6>
      <Separator className='mt-20 mb-10' />
      <div className='h-full'>
        <FavoritesList />
      </div>
    </div>
  );
}
