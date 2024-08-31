import ProductCard from "@/components/ui/product-card";
import { getShoes } from "@/utils/actions/getShoes";
import { ShoeTypes } from "@/utils/types/shoeTypes";
import React from "react";

export default async function ProductList({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { data: shoes, total } = await getShoes({
    ...searchParams,
    page: 1,
    offset: 12,
  });
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1 gap-y-8 mx-2'>
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
  );
}
