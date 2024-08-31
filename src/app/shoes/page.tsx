import { Separator } from "@/components/ui/separator";
import React, { Suspense } from "react";
import BreadCrumbs from "./components/BreadCrumbs";
import TotalShoes from "./components/TotalShoes";
import SortDropdown from "./components/SortDropdown";
import FilterToggle from "./components/FilterToggle";
import Filters from "./components/Filters";
import Brands from "./components/Brands";
import Sizes from "./components/Sizes";
import PriceRange from "./components/PriceRange";
import ProductList from "./components/ProductList";
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
      <Separator className='my-10' orientation='horizontal' />

      <div className='max-w-[1400px] mx-auto '>
        <BreadCrumbs brand={brand} />

        <h6 className='capitalize mt-5'>{headerTitle}</h6>
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
