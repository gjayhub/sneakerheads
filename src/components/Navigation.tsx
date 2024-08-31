"use client";
import { useHideOnScrollDown } from "@/utils/hooks/useHideOnScroll";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Search, ShoppingBag } from "lucide-react";
import NavItem from "./ui/nav-item";
import { navType } from "@/utils/types/navTypes";
import { NavigationMenu, NavigationMenuList } from "./ui/navigation-menu";

import MobileNav from "./ui/mobile-nav";

export const navItems: navType[] = [
  {
    title: "New",
    url: "sort=new",
    icon: "/new.png",
  },
  {
    title: "Popular",
    url: "sort=popular",
    icon: "/flame.png",
  },
  {
    title: "Brands",
    url: "",
    icon: "/brand.svg",
    subNav: ["vans", "nike", "converse", "adidas"],
  },
  {
    title: "Sale",
    url: "promo=sale",
    icon: "/discount.png",
  },
];

export default function Navigation() {
  const { isVisible } = useHideOnScrollDown();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-0 bg-white w-screen z-50 `}
        >
          <nav className={`flex justify-between max-w-[1300px] mx-auto p-4`}>
            <div className='md:hidden'>
              <MobileNav />
            </div>
            <div className='   hidden md:block '>
              <h1 className='text-xl '>SNEAKERHEADS</h1>
            </div>
            <ul className='gap-8 hidden md:flex  '>
              {navItems.map((nav, idx) => (
                <NavigationMenu key={idx}>
                  <NavigationMenuList>
                    <NavItem nav={nav} />
                  </NavigationMenuList>
                </NavigationMenu>
              ))}
            </ul>
            <div className='flex gap-8'>
              <Search />
              <Heart />
              <ShoppingBag />
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
