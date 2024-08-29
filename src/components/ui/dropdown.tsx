import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { useHideOnScrollDown } from "@/utils/hooks/useHideOnScroll";
import { useMobileNav } from "@/utils/store/useMobileNav";

type subNavType = {
  title: string;
  url: string;
};

type DropdownProps = {
  dropdownTitle: ReactNode;
  items?: subNavType[];
  navItem?: string[];
  setIsOpen: (prev: boolean) => void;
  isOpen: boolean;
  setSelected?: (item: string) => void;
  itemsClassName?: string;
};

export default function Dropdown({
  dropdownTitle,
  items,
  setIsOpen,
  isOpen,
  setSelected,
  itemsClassName,
  navItem,
}: DropdownProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setIsMobileNavOpen } = useMobileNav();

  const listVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSummaryClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>, item: string) => {
    e.stopPropagation();
    setIsOpen(false);
    if (setSelected) {
      setSelected(item);
    }

    setIsMobileNavOpen(false);
  };
  const sort = searchParams.get("sort");

  const sortUrl = (url: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", url);

    const newUrl = `${pathname}?${params.toString()}`;
    return newUrl;
  };

  return (
    <motion.details className='border-stone-500' open={isOpen}>
      <summary
        className='flex cursor-pointer list-none items-center gap-4'
        onClick={handleSummaryClick}
      >
        <motion.svg
          className='rotate-0 order-1 transform'
          fill='none'
          height='20'
          width='20'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <polyline points='6 9 12 15 18 9'></polyline>
        </motion.svg>
        {dropdownTitle}
      </summary>

      <div className='relative'>
        <motion.ul
          className={cn(
            "w-fit ml-16 overflow-hidden  shadow-sm p-2",
            itemsClassName
          )}
          initial='hidden'
          animate={isOpen ? "visible" : "hidden"}
          variants={listVariants}
        >
          {items && (
            <>
              {items?.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  transition={{ duration: 0.3 }}
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    handleLinkClick(e, item.title)
                  }
                >
                  <Link href={sortUrl(item.url)}>{item.title}</Link>
                </motion.li>
              ))}
            </>
          )}
          {navItem && (
            <>
              {navItem?.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  transition={{ duration: 0.3 }}
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    handleLinkClick(e, item)
                  }
                >
                  <Link className='capitalize' href={item}>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </>
          )}
        </motion.ul>
      </div>
    </motion.details>
  );
}
