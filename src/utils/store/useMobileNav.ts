import { create } from "zustand";
type Nav = {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isMobileNavOpen: boolean) => void;
};
export const useMobileNav = create<Nav>()((set) => ({
  isMobileNavOpen: false,
  setIsMobileNavOpen: (isMobileNavOpen: boolean) => {
    set({ isMobileNavOpen });
  },
}));
