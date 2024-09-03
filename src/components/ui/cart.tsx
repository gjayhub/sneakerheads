"use client";

import { useCart } from "@/utils/store/useShoes";
import { ShoeTypes } from "@/utils/types/shoeTypes";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./button";

interface Shoe {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  brand: string;
  size: string | null;
}

interface CartItemProps {
  shoe: Shoe;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}

function CartItem({ shoe, onIncrease, onDecrease }: CartItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className='p-2 border-b grid grid-cols-[120px_1fr_30px] justify-between items-center gap-4'
    >
      <div className=''>
        <Image
          className='object-cover w-full max-h-[100px]'
          src={shoe.image}
          width={100}
          height={100}
          alt={shoe.image}
        />
      </div>
      <div className='flex justify-around items-center '>
        <div>
          <h6> {shoe.name}</h6>
          <p>{shoe.brand}</p>
          <p> ₱:{shoe.price}</p>
          <p>
            Size: <span>{shoe.size}</span>
          </p>
        </div>

        <div>{shoe.quantity}</div>
      </div>
      <div className='flex items-center flex-col justify-center gap-2'>
        <Button
          type='secondary'
          onClick={() => onDecrease(shoe.id)}
          className='px-2'
        >
          -
        </Button>
        <Button
          type='primary'
          onClick={() => onIncrease(shoe.id)}
          className='px-2'
        >
          +
        </Button>
      </div>
    </motion.li>
  );
}

export default function Cart() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const { cart, setCart } = useCart();

  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((shoe) =>
        shoe.id === id ? { ...shoe, quantity: shoe.quantity + 1 } : shoe
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((shoe) =>
        shoe.id === id && shoe.quantity > 1
          ? { ...shoe, quantity: shoe.quantity - 1 }
          : shoe
      )
    );
  };

  const totalPrice = cart.reduce(
    (total, shoe) => total + shoe?.price * shoe.quantity,
    0
  );

  return (
    <div className='relative'>
      <button onClick={() => setIsCartOpen((prev) => !prev)}>
        <ShoppingBag />
      </button>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className='absolute md:right-0 -right-5 shadow-lg bg-white  min-w-[70vw] md:min-w-[50vw] lg:min-w-[45vw] p-4'
          >
            <motion.ul className='h-[70vh] overflow-auto '>
              {cart.map((shoe) => (
                <CartItem
                  key={shoe.id}
                  shoe={shoe}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                />
              ))}
            </motion.ul>
            <div className='  p-4 border-t flex justify-between items-center'>
              <p className='font-bold'>Total Price:</p>
              <span> ₱: {totalPrice.toFixed(2)}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
