"use client";

import React from "react";
import Button from "./button";
import { ShoeTypes } from "@/utils/types/shoeTypes";
import { useCart, useShoes } from "@/utils/store/useShoes";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function AddToCart({ shoeDetails }: { shoeDetails: ShoeTypes }) {
  const { selectedSize, setSelectedSize } = useShoes();
  const { addCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (selectedSize?.length !== 0) {
      const addCartData = {
        name: shoeDetails?.name,
        quantity: 1,
        size: selectedSize ?? [],
        brand: shoeDetails?.brand,
        image: shoeDetails?.images[0],
        id: shoeDetails?.id,
        price: shoeDetails?.price,
        selected: false,
      };

      addCart(addCartData);
      toast({
        title: `${shoeDetails.name} is Added to the cart`,
        description: `Size: ${selectedSize}`,
        className: "bg-green-200 z-50",
      });
      setSelectedSize([]);
    }
  };
  return (
    <Button
      onClick={() => handleAddToCart()}
      className={cn(
        "col-span-1 p-2  text-sm lg:text-base",
        selectedSize?.length == 0 && "cursor-not-allowed "
      )}
      type='secondary'
    >
      ADD TO CART
    </Button>
  );
}
