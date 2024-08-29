import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { navType } from "@/utils/types/navTypes";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { usePathname } from "next/navigation";

export default function NavItem({ nav }: { nav: navType }) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const navItemRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleSubNavClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navItemRef.current &&
      !navItemRef.current.contains(event.target as Node)
    ) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const determineHref = () => {
    if (pathname === "/") {
      return `/shoes/${nav.url}`;
    }
    if (pathname === "/shoes") {
      return nav.url;
    }
    return nav.url; // Default case if no conditions match
  };

  return (
    <div
      ref={navItemRef}
      onClick={handleSubNavClick}
      className='relative [&>p]:hover:flex [&>div]:opacity-0 [&>div]:scale-0 [&>div]:hover:opacity-100 [&>div]:hover:scale-150'
    >
      <NavigationMenuItem>
        {nav.subNav ? (
          <>
            <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>
            <SubMenu submenu={nav.subNav} />
          </>
        ) : (
          <Link href={determineHref()}>{nav.title}</Link>
        )}
      </NavigationMenuItem>

      <div className='h-[1.5px] bg-black w-3/4 mx-auto transition-all ease-in-out duration-300' />
    </div>
  );
}

const SubMenu = ({ submenu }: { submenu: string[] | undefined }) => {
  return (
    <NavigationMenuContent className='px-2 bg-white pb-2 flex flex-col justify-center'>
      {submenu?.map((subNav, idx) => (
        <div key={idx} className=''>
          <Link className='capitalize' href={subNav}>
            {subNav}
          </Link>
        </div>
      ))}
    </NavigationMenuContent>
  );
};
