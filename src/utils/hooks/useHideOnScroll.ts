import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { useMobileNav } from "../store/useMobileNav";

export const useHideOnScrollDown = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { setIsMobileNavOpen } = useMobileNav();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const dbScrollY = useDebounce(scrollY, 50);

  const handleScroll = useCallback(() => {
    const cur = window.scrollY;

    setIsVisible(dbScrollY > cur || cur < 10);
    setScrollY(cur);
    setIsMobileNavOpen(false);
  }, [dbScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isVisible, isOpen, setIsOpen };
};
