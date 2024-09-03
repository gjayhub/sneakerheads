"use client";
import AddToFavorite from "@/components/ui/add-to-favorite";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

export default function ShoeImages({
  images,
}: {
  images: string[] | undefined;
}) {
  const firstImage = images ? images[0] : "";
  const [previewImage, setPreviewImage] = useState(firstImage);

  const handleChangeImage = (idx: number) => {
    const newImage = images ? images[idx] : "";
    setPreviewImage(newImage);
  };
  // lg:col-span-1 h-fit lg:max-h-[50vh] lg:order-1 order-2 flex justify-center  items-center lg:flex-col gap-1
  return (
    <div className='  w-full'>
      <div className='col-span-5 w-full relative'>
        <Image
          className='w-full object-cover max-h-[60vh]'
          src={previewImage}
          alt={previewImage}
          height={500}
          width={500}
        />
        <AddToFavorite />
      </div>
      <div className='  flex gap-1 mt-2 '>
        {images?.map((img, idx) => (
          <div
            key={idx}
            className='w-full'
            onClick={() => handleChangeImage(idx)}
          >
            <Image
              className='h-auto w-full'
              src={img}
              height={100}
              width={120}
              alt='kdjsalkj'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
