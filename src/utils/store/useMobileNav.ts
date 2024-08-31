import { create } from "zustand";
type Nav = {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isMobileNavOpen: boolean) => void;
};
type Filter = {
  isFilterOpen: boolean;
  setIsFilterOpen: (isMobileNavOpen: boolean) => void;
};
export const useMobileNav = create<Nav>()((set) => ({
  isMobileNavOpen: false,
  setIsMobileNavOpen: (isMobileNavOpen: boolean) => {
    set({ isMobileNavOpen });
  },
}));

export const useFilter = create<Filter>()((set) => ({
  isFilterOpen: false,
  setIsFilterOpen: (isFilterOpen: boolean) => {
    set({ isFilterOpen });
  },
}));
