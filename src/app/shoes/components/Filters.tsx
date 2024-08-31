"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useFilter } from "@/utils/store/useMobileNav";
import { AnimatePresence, motion } from "framer-motion";
import useMediaQuery from "@/utils/hooks/useMediaQuery";

export default function Filters({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className: string;
}>) {
  const { isFilterOpen, setIsFilterOpen } = useFilter();
  const filterRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    }

    // Attach event listener to document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsFilterOpen]);

  return (
    <AnimatePresence>
      {isSmallScreen && (
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
                x: 300,
                opacity: 0,
                transition: { type: "tween", duration: 0.3 },
              }}
              className={cn(
                "fixed right-0 p-4 pb-10 shadow-md rounded-bl-[10px] bg-white z-10 flex flex-col ",
                className
              )}
            >
              {children}
            </motion.div>
          )}
        </>
      )}
      <div className='border-r hidden md:block col-span-2'>{children}</div>
    </AnimatePresence>
  );
}
