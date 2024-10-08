import React from "react";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function FeaturedSection() {
  return (
    <section className='max-w-[1200px] mx-auto'>
      <div>
        <h1 className='text-center md:text-left md:py-5 overflow-hidden '>
          Step into the Ber Months with Style
        </h1>

        <h6 className='text-center md:text-left  mb-5'>
          Discover the latest Shoe collection, perfect for the cozy vibes and
          festive spirit of the season.
        </h6>
      </div>
      <BentoGrid className='max-w-7xl mx-auto md:auto-rows-[30rem] lg:auto-rows-[40rem]  bento-list'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
// [&:not(:hover)]:[mask-image:radial-gradient(ellipse_at_center,white,rgba(0,0,0,0.5)_80%)]
const FeatureImage = ({
  imageUrl,
  className,
}: {
  imageUrl: string;
  className?: string;
}) => (
  <div className='flex flex-1 w-full h-full min-h-[15rem] rounded-xl border border-transparent bg-neutral-100 '>
    <Image
      className={cn("object-cover img ", className)}
      src={imageUrl}
      width={700}
      height={600}
      alt=''
    />
  </div>
);

const items = [
  {
    title: "The Spirit of the Ber Months",
    description:
      "Embrace the warmth and festivity of the season with iconic footwear.",
    header: <FeatureImage imageUrl='/shoe-models/adidas-model.jpeg' />,
    className: "md:col-span-7",
  },
  {
    title: "Festive Flair",
    description:
      "Elevate your style with shoes that shine through the holiday hustle.",
    header: <FeatureImage imageUrl='/shoe-models/nike-model.webp' />,
    className: "md:col-span-5",
  },
  {
    title: "Cozy Comfort",
    description:
      "Step into the season with designs that blend warmth and fashion.",
    header: <FeatureImage imageUrl='/shoe-models/converse-model.jpg' />,
    className: "md:col-span-5",
  },
  {
    title: "Holiday Vibes",
    description:
      "Celebrate the magic of the season with footwear that makes a statement.",
    header: <FeatureImage imageUrl='/shoe-models/vans-model.jpg' />,
    className: "md:col-span-7",
  },
];
