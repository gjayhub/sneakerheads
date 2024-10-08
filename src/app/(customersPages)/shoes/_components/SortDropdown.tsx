"use client";
import Dropdown from "@/components/ui/custom-dropdown";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const sortItems = [
  { title: "What's New", url: "new" },
  { title: "Price Low To High", url: "price_asc" },
  { title: "Price High To Low", url: "price_desc" },
  { title: "Popular", url: "popular" },
];

export default function SortDropdown() {
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort");
  const selectedSortItem = sortItems.find((item) => item.url === sortParam);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selected, setSelected] = useState(
    selectedSortItem?.title || sortItems[0].title
  );

  return (
    <Dropdown
      dropdownTitle={<p className='text-sm'>Sort by: {selected}</p>}
      isOpen={isSortOpen}
      setIsOpen={setIsSortOpen}
      items={sortItems}
      setSelected={setSelected}
      itemsClassName='absolute bg-white w-full right-0 text-sm z-20'
    />
  );
}
