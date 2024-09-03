"use client";
import Checkbox from "@/components/ui/CheckBox";
import { cn } from "@/lib/utils";
import { useShoes } from "@/utils/store/useShoes";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Sizes({
  // searchParams,
  sizes = ["6", "7", "8", "8.5", "9", "9.5", "10", "11", "12"],
  multiSelect = true,
}: {
  // searchParams?: { [key: string]: string | string[] | undefined };
  sizes?: string[];
  multiSelect?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const size = searchParams.get("size");
  const { setSelectedSize } = useShoes();

  const [selectedSizes, setSelectedSizes] = useState(
    size ? size.split(",") : []
  );

  const params = new URLSearchParams(searchParams.toString());

  const handleSizeChanges = (size: string) => {
    if (!multiSelect) {
      setSelectedSizes([size]);
      setSelectedSize(size);
      return;
    }
    const isSelected = selectedSizes.includes(size);
    const newSelectedSizes = isSelected
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(newSelectedSizes);
    params.delete("page");
    if (newSelectedSizes.length > 0) {
      params.set("size", newSelectedSizes.join(","));
    } else {
      params.delete("size");
    }
    return router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <h6 className='mb-1'>Size</h6>
      <p className='text-sm'>US</p>
      <div
        className={cn(
          "grid grid-cols-3 ml-2 mb-2 place-items-center md:place-items-start",
          !multiSelect && "grid-cols-4"
        )}
      >
        {sizes.map((size) => (
          <div
            // href={generateUrlWithNewSize(size)}
            onClick={() => handleSizeChanges(size)}
            key={size}
            className='col-span-1 w-fit'
          >
            <p className='text-center text-xs text-slate-500'>{size}</p>
            <Checkbox isChecked={selectedSizes.includes(size)} fill={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
