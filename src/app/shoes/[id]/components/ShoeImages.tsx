"use client";
import AddToFavorite from "@/components/ui/add-to-favorite";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React, { ReactNode, useState } from "react";

export default function ShoeImages({
  images,

  children,
}: {
  images: string[] | undefined;

  children: ReactNode;
}) {
  const firstImage = images ? images[0] : "";
  const [previewImage, setPreviewImage] = useState(firstImage);

  const handleChangeImage = (idx: number) => {
    const newImage = images ? images[idx] : "";
    setPreviewImage(newImage);
  };

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
        {children}
      </div>
      <div className='  flex gap-1 mt-2 '>
        {images?.map((img, idx) => (
          <div
            key={idx}
            className='w-full cursor-pointer'
            onMouseEnter={() => handleChangeImage(idx)}
            onClick={() => handleChangeImage(idx)}
          >
            <Image
              className='h-auto w-full hover:scale-105'
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
