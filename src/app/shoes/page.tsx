import React, { Suspense } from "react";
import BreadCrumbs from "./BreadCrumbs";

import SortDropdown from "./SortDropdown";
import { Separator } from "@/components/ui/separator";
import Brands from "./Brands";
import Sizes from "./Sizes";
import PriceRange from "./PriceRange";
import { shoes } from "@/utils/data";
import ProductCard from "@/components/ui/product-card";
import { Filter } from "lucide-react";
import ProductList from "./ProductList";
import { getShoes } from "@/utils/actions/getShoes";
type brandsType = { slug: string };
export default async function Shoes({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const headerTitle = searchParams?.brand || "All Shoes";
  const { data: shoes } = await getShoes({
    ...searchParams,
    page: 1,
    offset: 12,
  });
  return (
    <div className='h-auto relative md:px-10 px-2'>
      <Separator className='my-16' orientation='horizontal' />

      <div className='max-w-[1400px] mx-auto '>
        <BreadCrumbs />

        <h6 className='capitalize mt-10'>{headerTitle}</h6>
        <div className='flex justify-between'>
          <p className='text-gray-400'>20 items</p>
          <div className='flex gap-6 items-center'>
            <button className='md:hidden flex items-center gap-2 '>
              Filter <Filter className='mt-1' size={17} />
            </button>
            <Suspense fallback={<p>Loading</p>}>
              <SortDropdown />
            </Suspense>
          </div>
        </div>

        <div className='h-screen md:grid grid-cols-12 mt-5 '>
          <div className='col-span-2 border-r hidden md:block'>
            <Brands searchParams={searchParams} />
            <Separator className='' orientation='horizontal' />

            <Sizes searchParams={searchParams} />
            <Separator className='' orientation='horizontal' />
            <Suspense fallback={<p>Loading</p>}>
              <PriceRange />
            </Suspense>
          </div>
          <div className='col-span-10 h-full overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
            <ProductList shoes={shoes} />
          </div>
        </div>
      </div>
    </div>
  );
}
