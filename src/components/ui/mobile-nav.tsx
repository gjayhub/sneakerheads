import React, { useState } from "react";
import { MenuButton } from "./mobile-menu";
import { useHideOnScrollDown } from "@/utils/hooks/useHideOnScroll";
import { navItems } from "../Navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Heart, ShoppingBag, User } from "lucide-react";

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
  const { isOpen, setIsOpen } = useHideOnScrollDown();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const handleMenuButton = () => {
    setIsOpen((prev) => !prev);
    setIsDetailsOpen(false);
  };
  const listVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1, // Stagger the animation of the children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <MenuButton isOpen={isOpen} onClick={handleMenuButton} />
      <AnimatePresence>
        {isOpen && (
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
                        <>
                          <motion.details
                            className='border-stone-500'
                            onClick={() => setIsDetailsOpen((prev) => !prev)}
                            initial={false}
                            transition={{ duration: 0.3 }}
                          >
                            <summary className='flex cursor-pointer list-none items-center gap-4'>
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
                                animate={{ rotate: isDetailsOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <polyline points='6 9 12 15 18 9'></polyline>
                              </motion.svg>
                              <p className='text-lg'>{nav.title}</p>
                            </summary>
                            <motion.ul
                              className='w-fit ml-16 overflow-hidden'
                              initial='hidden'
                              animate={isDetailsOpen ? "visible" : "hidden"}
                              variants={listVariants}
                            >
                              {nav.subNav.map((subnav, idx) => (
                                <motion.li
                                  key={idx}
                                  variants={itemVariants}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Link href={subnav.url}>{subnav.title}</Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </motion.details>
                        </>
                      ) : (
                        <div className='flex'>
                          <Link href={nav.url} className='text-lg'>
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
