import ProductCard from "@/components/ui/product-card";
import { shoes } from "@/utils/data";
import { ShoeTypes } from "@/utils/types/shoeTypes";

import React from "react";

export default function SimilarShoes({ brand }: { brand: string | undefined }) {
  const similarShoes = shoes.filter((shoe) => shoe.brand === brand);
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-1 gap-y-8 mx-2'>
      {similarShoes?.slice(0, 6).map((shoe: ShoeTypes) => (
        <ProductCard
          key={shoe.id}
          brand={shoe.brand}
          image={shoe.images[0]}
          name={shoe.name}
          price={shoe.price}
          id={shoe.id}
        />
      ))}
    </div>
  );
}
