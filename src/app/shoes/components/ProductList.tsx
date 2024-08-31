const ITEMS_PER_PAGE = 24;

import ProductCard from "@/components/ui/product-card";
import { getShoes } from "@/utils/actions/getShoes";
import { ShoeTypes } from "@/utils/types/shoeTypes";
import React from "react";
import PaginationComponent from "./Pagination";
import { Separator } from "@/components/ui/separator";

export default async function ProductList({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = searchParams?.page || 1;
  const offSet = ITEMS_PER_PAGE * Number(currentPage) - ITEMS_PER_PAGE;
  const { data: shoes, total } = await getShoes({
    ...searchParams,
    page: currentPage as number,
    offset: 24,
  });
  return (
    <div>
      {shoes.length === 0 && (
        <div className='h-[50vh] w-full flex justify-center items-center'>
          No Shoes Found
        </div>
      )}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-1 gap-y-8 mx-2'>
        {shoes?.map((shoe: ShoeTypes) => (
          <div key={shoe.id} className=''>
            <ProductCard
              brand={shoe.brand}
              image={shoe.images[0]}
              name={shoe.name}
              price={shoe.price}
              id={shoe.id}
            />
          </div>
        ))}
      </div>
      <Separator className='mt-10 w-[80%] mx-auto' />
      <PaginationComponent
        currentPage={currentPage as number}
        totalItems={total}
        offset={offSet}
      />
    </div>
  );
}
