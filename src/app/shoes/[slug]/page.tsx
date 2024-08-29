import React, { Suspense } from "react";
import BreadCrumbs from "../BreadCrumbs";
import SortDropdown from "../SortDropdown";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Checkbox from "@/components/ui/CheckBox";
import PriceRange from "../PriceRange";
import Sizes from "../Sizes";
import { headers } from "next/headers";
import Brands from "../Brands";

type brandsType = { slug: string };

export default function BrandName({
  params,
  searchParams,
}: {
  params: brandsType;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { slug } = params;
  const validSlug = [
    "nike",
    "adidas",
    "converse",
    "vans",
    "sale",
    "popular",
    "new",
    "limited",
  ];

  if (!validSlug.includes(slug)) {
    return <div className='h-screen grid place-content-center'> ERROR </div>;
  }

  return (
    <div className='h- relative px-10'>
      <Separator className='my-16' orientation='horizontal' />

      <div className='max-w-[1400px] h-full mx-auto '>
        <BreadCrumbs />

        <h6 className='capitalize mt-10'>{slug}</h6>
        <div className='flex justify-between'>
          <p className='text-gray-400'>20 items</p>
          <Suspense fallback={<p>Loading</p>}>
            <SortDropdown />
          </Suspense>
        </div>

        <div className='h-screen grid grid-cols-12 mt-5 '>
          <div className='col-span-2 border-r'>
            <Brands searchParams={searchParams} />
            <Separator className='' orientation='horizontal' />

            <Sizes searchParams={searchParams} />
            <Separator className='' orientation='horizontal' />
            <Suspense fallback={<p>Loading</p>}>
              <PriceRange />
            </Suspense>
          </div>
          <div className='col-span-10'>Product List</div>
        </div>
      </div>
    </div>
  );
}
