import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
type PaginationComponentProp = {
  currentPage: number;
  totalItems: number;
  searchParams?: { [key: string]: string | string[] | undefined };
  offset: number;
};

export default function PaginationComponent({
  currentPage,
  totalItems,
  searchParams,
  offset,
}: PaginationComponentProp) {
  return (
    <div className='mt-10'>
      <div className=' flex w-full justify-between '>
        <Link
          href={{
            pathname: "shoes",
            query: { ...searchParams, page: Number(currentPage) - 1 },
          }}
          className={cn(
            "flex items-center",
            currentPage <= 1 && "pointer-events-none text-slate-400"
          )}
        >
          <ChevronLeft />
          Prev
        </Link>

        <div className='font-semibold'>Page {currentPage}</div>

        <Link
          className={cn(
            "flex items-center",
            offset + 24 >= totalItems && "pointer-events-none text-slate-400"
          )}
          href={{
            pathname: "shoes",
            query: { ...searchParams, page: Number(currentPage) + 1 },
          }}
        >
          Next
          <ChevronRight />
        </Link>
      </div>
    </div>
  );
}
