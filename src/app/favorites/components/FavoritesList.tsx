"use client";
import ProductCard from "@/components/ui/product-card";
import { useFavorite } from "@/utils/store/useShoes";

import React from "react";

export default function FavoritesList() {
  const { favorites } = useFavorite();

  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1 gap-y-8 mx-2'>
      {favorites?.map((shoe) => (
        <ProductCard
          key={shoe.id}
          brand={shoe.brand}
          image={shoe.image}
          name={shoe.name}
          price={shoe.price}
          id={shoe.id}
        />
      ))}
    </div>
  );
}
