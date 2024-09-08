"use client";

import { useFilter } from "@/utils/store/useNav";
import { Filter } from "lucide-react";
import React from "react";

export default function FilterToggle() {
  const { isOpen: isFilterOpen, setIsOpen: setIsFilterOpen } = useFilter();
  return (
    <button
      onClick={() => setIsFilterOpen(!isFilterOpen)}
      className='md:hidden flex items-center gap-2 '
    >
      Filter <Filter className='mt-1' size={17} />
    </button>
  );
}
