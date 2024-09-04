import { create } from "zustand";

type ToggleStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const createToggleStore = (initialState: boolean = false) => {
  return create<ToggleStore>((set) => ({
    isOpen: initialState,
    setIsOpen: (isOpen: boolean) => {
      set({ isOpen });
    },
  }));
};

export const useMobileNav = createToggleStore();
export const useFilter = createToggleStore();
export const useCartToggle = createToggleStore();
export const useFavoriteToggle = createToggleStore();
