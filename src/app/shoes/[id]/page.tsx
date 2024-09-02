import { getShoeById } from "@/utils/actions/getShoesById";
import React, { Suspense } from "react";
import ShoeImages from "./components/ShoeImages";
import Sizes from "../components/Sizes";
import Button from "@/components/ui/button";
import SimilarShoes from "./components/SimilarShoes";

export default async function ShoeDetails({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { data: shoeDetails } = await getShoeById(Number(params.id));

  return (
    <div className=' mt-20'>
      <div className='max-w-[1300px] mx-auto overflow-hidden'>
        <div className='md:flex w-full mx-2 gap-8'>
          <div className='flex-1 '>
            <ShoeImages images={shoeDetails?.images} />
          </div>

          <div className='flex-1 flex flex-col justify-center '>
            <header>
              <h3>{shoeDetails?.name}</h3>
              <h6 className='font-semibold'>{shoeDetails?.brand}</h6>
            </header>
            <p className='font-semibold text-xl my-8'>
              ₱: <span className=' '>{shoeDetails?.price}</span>
            </p>
            <p>{shoeDetails?.description}</p>

            <div className='max-w-[50%] mt-8'>
              <Sizes sizes={shoeDetails?.availableSizes} multiSelect={false} />
            </div>
            <div className='grid grid-cols-2 gap-8 w-[90%] mt-8'>
              <Button
                className='col-span-1 text-sm lg:text-base '
                type='primary'
              >
                BUY
              </Button>

              <Button
                className='col-span-1  text-sm lg:text-base'
                type='secondary'
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
        <div className=''>
          <h3 className='text-center my-8'>You might also like</h3>
          <SimilarShoes brand={shoeDetails?.brand} />
        </div>
      </div>
    </div>
  );
}
