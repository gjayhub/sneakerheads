"use client";

import React from "react";
import Button from "./button";
import { ShoeTypes } from "@/utils/types/shoeTypes";
import { useCart, useShoes } from "@/utils/store/useShoes";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function AddToCart({ shoeDetails }: { shoeDetails: ShoeTypes }) {
  const { selectedSize } = useShoes();
  const { addCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    const addCartData = {
      name: shoeDetails?.name,
      quantity: 1,
      size: selectedSize,
      brand: shoeDetails?.brand,
      image: shoeDetails?.images[0],
      id: shoeDetails?.id + Number(selectedSize),
      price: shoeDetails?.price,
    };

    addCart(addCartData);
    toast({
      title: `${shoeDetails.name} is Added to the cart`,
      description: `Size: ${selectedSize}`,
      className: "bg-white z-50",
    });
  };
  return (
    <Button
      onClick={() => handleAddToCart()}
      aria-disabled={!selectedSize}
      className={cn(
        "col-span-1 p-2  text-sm lg:text-base",
        !selectedSize && "cursor-not-allowed pointer-events-none"
      )}
      type='secondary'
    >
      ADD TO CART
    </Button>
  );
}
