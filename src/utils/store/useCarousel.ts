import { useEffect } from "react";
import { create } from "zustand";
let CAROUSEL_INDEX = 0;
type Store = {
  current: carouselItemsType;
  setCurrent: (idx: number) => void;
  next: () => void;
  prev: () => void;
  animationDirection: string;
  active: number;
};
type carouselItemsType = {
  name: string;
  price: number;
  availableSizes: string[];
  brand: string;
  image: string;
  id: number;
  className: string;
};

export const carouselItems: carouselItemsType[] = [
  {
    name: "JA 1EP",
    price: 7999.0,
    availableSizes: ["7", "8", "9", "10", "11", "12"],
    brand: "Nike",

    image: "/hero-images/nike.png",
    id: 1,
    className: "text-header top-[35%] md:top-[18%] lg:top-[5%]",
  },
  {
    name: "Samba OG",
    price: 4799.0,
    availableSizes: ["7", "8", "9", "10", "11", "12"],
    brand: "Adidas",
    image: "/hero-images/adidas.png",
    id: 2,
    className: "text-header top-[35%] md:top-[18%] lg:top-[5%]",
  },
  {
    name: "Old School",
    price: 4599.0,
    availableSizes: ["7", "8", "9", "10", "11", "12"],
    brand: "Vans",

    image: "/hero-images/vans.png",
    id: 3,
    className: "text-header top-[35%] md:top-[18%] lg:top-[5%]",
  },
  {
    name: "Star Player 76",
    price: 4699.0,

    availableSizes: ["7", "8", "9", "10", "11", "12"],
    brand: "Converse",

    image: "/hero-images/converse.png",
    id: 4,
    className:
      "[font-size:clamp(4rem,10vw,17rem)] md:text-header lg:[font-size:clamp(4rem,10vw,17rem)] top-[35%] md:top-[18%] lg:top-[14%]",
  },
];

export const useCarousel = create<Store>()((set) => ({
  current: carouselItems[CAROUSEL_INDEX],
  animationDirection: "right",
  active: 1,
  setCurrent: (idx: number) =>
    set({ current: carouselItems[idx], active: idx + 1 }),
  next: () => {
    if (CAROUSEL_INDEX < carouselItems.length - 1) {
      CAROUSEL_INDEX += 1;
      set({
        current: carouselItems[CAROUSEL_INDEX],
        animationDirection: "left",
        active: CAROUSEL_INDEX + 1,
      });
    } else {
      CAROUSEL_INDEX = 0;
      set({
        current: carouselItems[CAROUSEL_INDEX],
        animationDirection: "left",
        active: 1,
      });
    }
  },
  prev: () => {
    if (CAROUSEL_INDEX > 0) {
      CAROUSEL_INDEX -= 1;

      set({
        current: carouselItems[CAROUSEL_INDEX],
        animationDirection: "right",
        active: CAROUSEL_INDEX + 1,
      });
    } else {
      CAROUSEL_INDEX = carouselItems.length - 1;
      set({
        current: carouselItems[CAROUSEL_INDEX],
        animationDirection: "right",
        active: CAROUSEL_INDEX + 1,
      });
    }
  },
}));
