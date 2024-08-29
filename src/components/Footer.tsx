import React from "react";
import Button from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='mt-20 overflow-hidden'>
      <div className='bg-black flex flex-col justify-center items-center'>
        <h3 className='text-white text-center'>
          Create your account and get 20% off and free shipping on your first
          order!
        </h3>
        <Button
          type='secondary'
          className=' underline font-semibold bg-white w-fit '
        >
          SIGNUP
        </Button>
      </div>
      <div className='flex md:justify-center justify-between max-w-[1200px] md:mx-auto mt-10 mx-4'>
        <div className='flex flex-col text-sm flex-1'>
          <h6 className='mb-4'>Shop</h6>
          <Link href=''>Trending</Link>
          <Link href=''>Special Offer</Link>
          <Link href=''>Sale</Link>
          <Link href=''>New</Link>
        </div>
        <div className='flex flex-col text-sm flex-1'>
          <h6 className='mb-4'>Support</h6>
          <Link href=''>FAQ</Link>
          <Link href=''>Order and Return Status</Link>
          <Link href=''>Return</Link>
          <Link href=''>Payment</Link>
          <Link href=''>Customer Service</Link>
        </div>
        <div className='flex flex-col text-sm flex-1'>
          <h6 className='mb-4'>Contact</h6>
          <div>
            <p className='font-semibold'>Email</p>
            <p>sneakerheads@gmail.com</p>
          </div>
          <div>
            <p className='font-semibold'>Address</p>
            <p>1273 Zone 04, Centro East, Ballesteros, Metro Manila</p>
          </div>
        </div>
      </div>
      <div className='py-4 text-center text-sm'>
        <p>© 2024 Sneakerheads</p>
      </div>
    </footer>
  );
}
