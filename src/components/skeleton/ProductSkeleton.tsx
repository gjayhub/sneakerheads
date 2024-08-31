import React from "react";
import { SkeletonCard } from "./SkeletonCard";

export default function ProductSkeleton() {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-1 gap-y-8 mx-2'>
      {Array.from({ length: 24 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
