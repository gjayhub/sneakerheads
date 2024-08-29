import React, { Suspense } from "react";
import BreadCrumbs from "./BreadCrumbs";
import Dropdown from "@/components/ui/dropdown";
import SortDropdown from "./SortDropdown";
import { Separator } from "@/components/ui/separator";
import Brands from "./Brands";
import Sizes from "./Sizes";
import PriceRange from "./PriceRange";
type brandsType = { slug: string };
export default function Shoes({
  params,
  searchParams,
}: {
  params: brandsType;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className='h- relative px-10'>
      <Separator className='my-16' orientation='horizontal' />

      <div className='max-w-[1400px] h-full mx-auto '>
        <BreadCrumbs />

        <h6 className='capitalize mt-10'>All Shoes</h6>
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
