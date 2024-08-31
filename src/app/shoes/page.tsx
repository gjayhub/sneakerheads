import React, { Suspense } from "react";
import BreadCrumbs from "./BreadCrumbs";

import SortDropdown from "./SortDropdown";
import { Separator } from "@/components/ui/separator";
import Brands from "./Brands";
import Sizes from "./Sizes";
import PriceRange from "./PriceRange";
import { shoes } from "@/utils/data";

import ProductList from "./ProductList";

import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import Filters from "./Filters";
import FilterToggle from "./FilterToggle";
import { getShoes } from "@/utils/actions/getShoes";
import TotalShoes from "./TotalShoes";
type brandsType = { slug: string };
export default function Shoes({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const headerTitle = searchParams?.brand || searchParams?.promo || "All Shoes";
  const brand = searchParams?.brand as string;

  return (
    <div className='h-auto relative md:px-10 px-2'>
      <Separator className='my-16' orientation='horizontal' />

      <div className='max-w-[1400px] mx-auto '>
        <BreadCrumbs brand={brand} />

        <h6 className='capitalize mt-10'>{headerTitle}</h6>
        <div className='flex justify-between'>
          <Suspense
            key={Math.random()}
            fallback={<p className=' bg-slate-200 text-slate-200 '>...</p>}
          >
            <TotalShoes searchParams={searchParams} />
          </Suspense>

          <div className='flex gap-6 items-center'>
            <Suspense key={Math.random()} fallback={<p>Loading</p>}>
              <SortDropdown />
            </Suspense>
            <FilterToggle />
          </div>
        </div>

        <div className='h-screen md:grid grid-cols-12 mt-5 '>
          <Filters className='col-span-2'>
            <Brands searchParams={searchParams} />
            <Separator className='' orientation='horizontal' />

            <Sizes searchParams={searchParams} />

            <Separator className='' orientation='horizontal' />
            <Suspense key={Math.random()} fallback={<p>Loading</p>}>
              <PriceRange />
            </Suspense>
          </Filters>
          <div className='col-span-10 h-full overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
            <Suspense key={Math.random()} fallback={<ProductSkeleton />}>
              <ProductList searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
