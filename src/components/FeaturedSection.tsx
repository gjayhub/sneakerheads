import Image from "next/image";
import React from "react";
import Button from "./ui/button";

export default function FeaturedSection() {
  return (
    <section className='w-screen my-20 overflow-hidden '>
      <h1 className='text-center  overflow-hidden text-4xl max-w-[90vw] mx-auto'>
        Today&apos;s Special offer!
      </h1>
      <div className='  lg:h-[600px] h-[80vh] md:h-[65vh]  relative '>
        <Image
          className='lg:object-fill object-cover  h-full md:w-[80vw] mx-auto  '
          src='/paper.png'
          height={300}
          width={400}
          alt='paper background'
        />
        <div className='absolute lg:h-auto lg:top-[15%] top-2 left-[10%]  grid lg:grid-cols-3 [grid-template-rows:300px_200px_300px] w-[80vw] mx-auto'>
          <div className=' flex lg:flex-col z-10 justify-center md:justify-start md:ml-8 lg:ml-0 items-center  lg:grid-cols-1 '>
            <div className='relative  '>
              <Image
                className='w-[150px] lg:w-full'
                src='/ticket.svg'
                alt='Ticket'
                height={100}
                width={300}
              />

              <div className='  font-leage-gothic text-center text-white absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h6 className='text-lg lg:text-4xl font-bold '>MEGA SALE!</h6>
                <h3 className='text-yellow-300 text-2xl'>69% OFF!</h3>
              </div>
            </div>
            <div className='border-b border-slate-300 w-[60%] lg:block hidden  ' />
            <h3 className='font-leage-gothic text-4xl '>00:22:23</h3>
          </div>
          <div className=' lg:grid-cols-1 relative '>
            <Image
              className=' lg:scale-[1.5] lg:-rotate-45 rotate-[-30deg] lg:-left-[20%] lg:-top-[40%] md:-top-[0]  object-cover lg:-translate-x-0 lg:-translate-y-0  absolute -translate-x-1/2 -translate-y-[60%] left-[40%]'
              src='/sale.png'
              alt='Todays special offer Image'
              height={500}
              width={500}
            />
          </div>
          <div className=' lg:relative lg:grid-cols-1 flex px-4 flex-col w-full lg:-bottom-0   lg:justify-end gap-4  lg:pr-8 absolute bottom-[35%] md:right-0 md:w-[300px] md:bottom-[40%]'>
            <h3 className='text-2xl lg:text-5xl '>Pegasus 41 Electric</h3>
            <p className='lg:text-xl text-lg lg:mt-10'>
              ₱ :{" "}
              <span className='font-extrabold line-through opacity-40 pr-4'>
                4599.0
              </span>
              <span className='text-yellow-400 font-extrabold '>1425.69</span>
            </p>
            <div className='grid grid-cols-2 gap-4 '>
              <Button
                className='col-span-1 py-2 text-sm lg:text-base'
                type='primary'
              >
                BUY
              </Button>
              <Button
                className='col-span-1 py-2 text-sm lg:text-base'
                type='secondary'
              >
                SHOW MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
