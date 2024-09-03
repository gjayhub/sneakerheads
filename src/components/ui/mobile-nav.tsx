import React, { useState } from "react";
import { MenuButton } from "./mobile-menu";
import { useHideOnScrollDown } from "@/utils/hooks/useHideOnScroll";
import { navItems } from "../Navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Heart, ShoppingBag, User } from "lucide-react";
import Dropdown from "./dropdown";
import { url } from "inspector";
import { useMobileNav } from "@/utils/store/useMobileNav";
import { usePathname } from "next/navigation";

const userNav = [
  {
    name: "Account",
    url: "",
    icon: <User className='text-blue-400' />,
    className: "",
  },
  {
    name: "My Cart",
    url: "",
    icon: <ShoppingBag className='text-yellow-400' />,
    className: "",
  },
  {
    name: "Favorites",
    url: "",
    icon: <Heart className='text-red-400' />,
  },
];

export default function MobileNav() {
  const { isMobileNavOpen, setIsMobileNavOpen } = useMobileNav();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const handleMenuButton = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setIsDetailsOpen(false);
  };
  const pathname = usePathname();
  const determineHref = (url: string) => {
    if (pathname === "/shoes") {
      return `?${url}`;
    } else {
      return `/shoes?${url}`;
    }
  };

  return (
    <>
      <MenuButton isOpen={isMobileNavOpen} onClick={handleMenuButton} />
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -20 }}
            className='fixed  top-0 left-0 h-screen w-[50vw] bg-white -z-20'
          >
            <div className='relative pl-4'>
              <h6 className=' text-center mt-12 text-xl font-extrabold top-10'>
                SNEAKERHEADS
              </h6>
              <ul className='flex flex-col gap-2 mt-5 '>
                {navItems.map((nav, idx) => (
                  <li key={idx}>
                    <div>
                      {nav.subNav ? (
                        <Dropdown
                          isOpen={isDetailsOpen}
                          setIsOpen={setIsDetailsOpen}
                          navItem={nav.subNav}
                          dropdownTitle={<p className='text-lg'>{nav.title}</p>}
                        />
                      ) : (
                        <div className='flex'>
                          <Link
                            href={determineHref(nav.url)}
                            className='text-lg'
                          >
                            {nav.title}
                          </Link>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className='border-b border-slate-300 w-[90%] my-4 ' />
              <ul className='text-lg'>
                {userNav.map((item, idx) => (
                  <li className='flex gap-2 items-center' key={idx}>
                    <Link href={item.url}>{item.name} </Link>
                  </li>
                ))}

                <li className='flex gap-2 items-center'>
                  <Link href=''> Logout</Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
