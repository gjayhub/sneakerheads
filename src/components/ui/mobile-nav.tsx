import React, { useState } from "react";
import { MenuButton } from "./mobile-menu";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuButton
        className=''
        isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && <div className='h-screen w-[50vw] z-40'></div>}
    </>
  );
}
