import { create } from "zustand";
import { ShoeTypes } from "../types/shoeTypes";
import { cartData } from "../data";

type useShoesType = {
  favorites: ShoeTypes[];
  addFavorite: (shoe: ShoeTypes) => void;
  selectedShoe: ShoeTypes | null;
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
};

export const useShoes = create<useShoesType>()((set) => ({
  favorites: [],
  selectedShoe: null,
  selectedSize: null,
  setSelectedSize: (size) => {
    set({ selectedSize: size });
  },
  addFavorite: (shoe) =>
    set((state) => ({
      favorites: [...state.favorites, shoe],
    })),
}));

export type cartType = {
  name: string;
  image: string;
  quantity: number;
  id: number;
  brand: string;
  size: string | null;
  price: number;
};

type useCartType = {
  cart: cartType[];
  addCart: (newShoe: cartType) => void;
  setCart: (cart: cartType[] | ((prevCart: cartType[]) => cartType[])) => void;
};

export const useCart = create<useCartType>((set, get) => ({
  cart: cartData,
  setCart: (newCart) =>
    set((state) => ({
      cart: typeof newCart === "function" ? newCart(state.cart) : newCart,
    })),
  addCart: (newShoe: cartType) => {
    const { cart } = get();
    const isAlreadyInCart = cart.some((shoe) => shoe.id === newShoe.id);

    let updatedShoe: cartType[];

    if (isAlreadyInCart) {
      updatedShoe = cart.map((shoe) =>
        shoe.id === newShoe.id ? { ...shoe, quantity: shoe.quantity + 1 } : shoe
      );
    } else {
      updatedShoe = [...cart, newShoe];
    }

    set({ cart: updatedShoe });
  },
}));
