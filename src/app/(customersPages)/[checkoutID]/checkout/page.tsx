"use client";
import Button from "@/components/ui/button";
import { useOrder } from "@/utils/store/useShoes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function CheckOutPage({
  params,
}: {
  params: {
    checkoutID: string;
  };
}) {
  const { order } = useOrder();
  const orderItemDetails = order.find(
    (order) => order.orderId === params.checkoutID
  );
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to an API
    console.log("Delivery information submitted:", deliveryInfo);
  };

  if (!orderItemDetails) {
    return <div>Order not found.</div>;
  }

  const { orderItem } = orderItemDetails;
  const totalPrice = orderItem.reduce(
    (total, shoe) => total + shoe?.price * shoe.quantity,
    0
  );

  return (
    <div className=' p-6'>
      <h1 className='text-2xl font-bold mb-4 mt-16 text-center'>
        Order Details
      </h1>

      <div className='max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg'>
        <div className='flex gap-4 flex-col md:flex-row'>
          <div className='mb-6 flex-1 '>
            <ul className=''>
              <div>
                <h2 className='text-xl font-semibold mb-2'>Items</h2>
              </div>
              {orderItem.map((item, index) => (
                <li
                  key={item.shoeID}
                  className='p-2 border-b grid grid-cols-[auto_1fr_auto_auto] justify-between items-center gap-4'
                >
                  <div className=''>
                    <Image
                      className='object-cover w-full max-h-[100px]'
                      src={item.image}
                      width={100}
                      height={100}
                      alt={item.image}
                    />
                  </div>

                  <div className='flex flex-col gap-1'>
                    <div>
                      <h6 className='text-sm md:text-lg lg:text-xl'>
                        {" "}
                        {item.name}
                      </h6>
                      <p className='text-xs  md:text-md lg:text-lg'>
                        {item.brand}
                      </p>
                    </div>
                    <div className='mt-2'>
                      <p className='text-xs  md:text-md lg:text-lg opacity-80'>
                        ₱:{item.price}
                      </p>
                      <p className='text-xs  md:text-md lg:text-lg opacity-80'>
                        Size: <span>{item.size}</span>
                      </p>
                    </div>
                  </div>
                  <div className='mr-4'>{item.quantity}</div>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4 flex-1'>
            <h2 className='text-xl font-semibold mb-2'>Delivery Information</h2>

            <div>
              <label className='block mb-1' htmlFor='address'>
                Address:
              </label>
              <input
                type='text'
                id='address'
                name='address'
                value={deliveryInfo.address}
                onChange={handleChange}
                className='w-full border border-gray-300 p-2 rounded'
                required
              />
            </div>

            <div>
              <label className='block mb-1' htmlFor='city'>
                City:
              </label>
              <input
                type='text'
                id='city'
                name='city'
                value={deliveryInfo.city}
                onChange={handleChange}
                className='w-full border border-gray-300 p-2 rounded'
                required
              />
            </div>

            <div>
              <label className='block mb-1' htmlFor='postalCode'>
                Postal Code:
              </label>
              <input
                type='text'
                id='postalCode'
                name='postalCode'
                value={deliveryInfo.postalCode}
                onChange={handleChange}
                className='w-full border border-gray-300 p-2 rounded'
                required
              />
            </div>

            <div>
              <label className='block mb-1' htmlFor='country'>
                Country:
              </label>
              <input
                type='text'
                id='country'
                name='country'
                value={deliveryInfo.country}
                onChange={handleChange}
                className='w-full border border-gray-300 p-2 rounded'
                required
              />
            </div>

            <div>
              <label className='block mb-1' htmlFor='phone'>
                Phone:
              </label>
              <input
                type='text'
                id='phone'
                name='phone'
                value={deliveryInfo.phone}
                onChange={handleChange}
                className='w-full border border-gray-300 p-2 rounded'
                required
              />
            </div>
          </form>
        </div>

        <div className='flex justify-center flex-col gap-4 items-center'>
          <div>
            <h2 className='text-2xl font-bold mt-4'>
              Total: ₱ : <span className='font-normal'>{totalPrice}</span>
            </h2>
          </div>
          <Button type='primary' className='w-[80%] p-2'>
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
}
