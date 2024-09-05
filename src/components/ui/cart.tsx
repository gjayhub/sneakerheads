"use client";

import { useCart } from "@/utils/store/useShoes";
import { ShoeTypes } from "@/utils/types/shoeTypes";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, Trash } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Button from "./button";
import Checkbox from "./CheckBox";
import Link from "next/link";
import { useCartToggle } from "@/utils/store/useNav";
import { useOutsideClick } from "@/utils/hooks/useOutsideClick";

interface Shoe {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  brand: string;
  size?: string[];
  selected: boolean;
}

interface CartItemProps {
  shoe: Shoe;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onSelectItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
  isDeleteOpen: boolean;
}

function CartItem({
  shoe,
  onIncrease,
  onDecrease,
  onSelectItem,
  onDeleteItem,
  isDeleteOpen,
}: CartItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className='p-2 border-b grid grid-cols-[auto_1fr_auto_auto] justify-between items-center gap-4'
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
      <Link
        href={`/shoes/${shoe.id}`}
        className='flex justify-between items-center '
      >
        <div className='flex flex-col gap-1'>
          <div>
            <h6 className='text-sm md:text-lg lg:text-xl'> {shoe.name}</h6>
            <p className='text-xs  md:text-md lg:text-lg'>{shoe.brand}</p>
          </div>
          <div className='mt-2'>
            <p className='text-xs  md:text-md lg:text-lg opacity-80'>
              ₱:{shoe.price}
            </p>
            <p className='text-xs  md:text-md lg:text-lg opacity-80'>
              Size: <span>{shoe.size}</span>
            </p>
          </div>
        </div>
        <div className='mr-4'>{shoe.quantity}</div>
      </Link>

      <div className='flex gap-2 flex-col md:flex-row justify-center items-center'>
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
      {isDeleteOpen ? (
        <button className='mx-auto' onClick={() => onDeleteItem(shoe.id)}>
          <Trash size={30} />
        </button>
      ) : (
        <Checkbox
          onClick={() => onSelectItem(shoe.id)}
          isChecked={shoe.selected}
          fill={true}
          className='border-slate-400 mx-auto'
        />
      )}
    </motion.li>
  );
}

export default function Cart() {
  const { isOpen: isCartOpen, setIsOpen: setIsCartOpen } = useCartToggle();
  const { cart, setCart } = useCart();
  const [deleteButton, setDeleteButton] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  useOutsideClick(cartRef, () => setIsCartOpen(false));

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
  const selectItem = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((shoe) =>
        shoe.id === id ? { ...shoe, selected: !shoe.selected } : shoe
      )
    );
  };

  const totalPrice = cart.reduce(
    (total, shoe) =>
      shoe.selected ? total + shoe?.price * shoe.quantity : total,
    0
  );
  const toggleEdit = () => {
    setDeleteButton((prev) => !prev);
  };
  const handleDeleteItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((cart) => cart.id !== id));
  };

  return (
    <div className='relative'>
      <div className='relative  '>
        <span className='absolute bottom-2 left-4 bg-yellow-200 px-2 text-sm font-semibold rounded-full -z-20 pointer-events-none'>
          {cart.length}
        </span>
        <button
          className='flex items-center'
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <ShoppingBag className='p-0' />
        </button>
      </div>
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            ref={cartRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className='absolute md:right-0 -right-5 shadow-lg bg-white  w-screen md:w-[50vw] lg:w-[35vw] p-4'
          >
            <div className='flex justify-between mx-2 '>
              <h6 className='font-semibold'>Shopping Cart</h6>
              <p onClick={() => toggleEdit()} className='underline'>
                {deleteButton ? "Done" : "Delete"}
              </p>
            </div>
            {cart.length !== 0 ? (
              <motion.ul className='h-[60vh] md:h-[70vh] overflow-auto '>
                {cart.map((shoe) => (
                  <CartItem
                    key={shoe.id}
                    shoe={shoe}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onSelectItem={selectItem}
                    onDeleteItem={handleDeleteItem}
                    isDeleteOpen={deleteButton}
                  />
                ))}
              </motion.ul>
            ) : (
              <div className='h-[40vh] flex justify-center items-center'>
                No Item Found
              </div>
            )}

            <div className='  p-4 border-t flex justify-between items-center'>
              <p className='font-bold'>Total Price:</p>
              <span> ₱: {totalPrice.toFixed(2)}</span>
            </div>

            <Button type='primary' className='w-full p-2'>
              Check Out
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
