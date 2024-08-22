import React, { useState } from "react";
import { MenuButton } from "./mobile-menu";
import { useHideOnScrollDown } from "@/utils/hooks/useHideOnScroll";
import { navItems } from "../Navigation";
import { NavigationMenu, NavigationMenuList } from "./navigation-menu";
import NavItem from "./nav-item";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNav() {
  const { isOpen, setIsOpen } = useHideOnScrollDown();
  return (
    <>
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -20 }}
            className='fixed  top-0 left-0 h-screen w-[50vw] bg-white -z-20'
          >
            <div className='relative'>
              <h6 className=' text-center mt-12 text-xl font-extrabold top-10'>
                SNEAKERHEADS
              </h6>
              <ul className='flex flex-col gap-2 mt-5 pl-4'>
                {navItems.map((nav, idx) => (
                  <li key={idx}>
                    <p className='text-lg'>{nav.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
