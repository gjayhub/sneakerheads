import { Separator } from "@/components/ui/separator";
import React, { Suspense } from "react";
import BreadCrumbs from "./_components/BreadCrumbs";
import TotalShoes from "./_components/TotalShoes";
import SortDropdown from "./_components/SortDropdown";
import FilterToggle from "./_components/FilterToggle";
import Filters from "./_components/Filters";
import Brands from "./_components/Brands";
import Sizes from "./_components/Sizes";
import PriceRange from "./_components/PriceRange";
import ProductList from "./_components/ProductList";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";

export default function Shoes({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const headerTitle = searchParams?.brand || searchParams?.promo || "All Shoes";
  const brand = searchParams?.brand as string;

  return (
    <div className='h-auto relative md:px-10 px-2'>
      <Separator className='md:my-10 my-8' orientation='horizontal' />

      <div className='max-w-[1400px] mx-auto '>
        <BreadCrumbs brand={brand} />

        <h6 className='capitalize md:mt-5 '>{headerTitle}</h6>
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

        <div className='h-full md:grid grid-cols-12 mt-5 '>
          <Filters className='col-span-2'>
            <Brands searchParams={searchParams} />
            <Separator className='' orientation='horizontal' />

            <Sizes />

            <Separator className='' orientation='horizontal' />
            <Suspense key={Math.random()} fallback={<p>Loading</p>}>
              <PriceRange />
            </Suspense>
          </Filters>
          <div className='col-span-10 h-screen overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
            <Suspense key={Math.random()} fallback={<ProductSkeleton />}>
              <ProductList searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
