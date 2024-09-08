import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function loading() {
  return (
    <div className='h-screen flex'>
      <div>
        <div>
          <Skeleton className=' w-full max-h-[70vh] bg-slate-300' />
        </div>
      </div>
      <div className='bg-slate-300'></div>
    </div>
  );
}
