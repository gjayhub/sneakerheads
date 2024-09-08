"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

import { AnimatePresence, motion } from "framer-motion";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import { useFilter } from "@/utils/store/useNav";
import { useOutsideClick } from "@/utils/hooks/useOutsideClick";

export default function Filters({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className: string;
}>) {
  const { isOpen: isFilterOpen, setIsOpen: setIsFilterOpen } = useFilter();
  const filterRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  useOutsideClick(filterRef, () => setIsFilterOpen(false));

  return (
    <AnimatePresence>
      {isSmallScreen ? (
        <>
          {isFilterOpen && (
            <motion.div
              ref={filterRef}
              initial={{ x: 300, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { type: "tween", duration: 0.3 },
              }}
              exit={{
                x: -300,
                opacity: 0,
              }}
              className={cn(
                "absolute right-0 p-4 pb-10 shadow-md rounded-bl-[10px] bg-white z-10 flex flex-col w-[65vw] ",
                className
              )}
            >
              {children}
            </motion.div>
          )}
        </>
      ) : (
        <div className='border-r hidden md:block col-span-2'>{children}</div>
      )}
    </AnimatePresence>
  );
}
