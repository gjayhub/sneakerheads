import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function loading() {
  return (
    <div className='h-screen flex'>
      <div className='flex justify-center items-center'>
        <div className=' w-[50%] max-h-[70vh] bg-slate-300'>
          <Skeleton />
        </div>
      </div>
      <div className='bg-slate-300'></div>
    </div>
  );
}
