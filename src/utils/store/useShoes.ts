import { create } from "zustand";
import { ShoeTypes } from "../types/shoeTypes";
import { cartData, favoritesData, shoes } from "../data";

type useShoesType = {
  selectedShoe: ShoeTypes | null;
  selectedSize: string[] | null;
  setSelectedSize: (size: string[]) => void;
};

export const useShoes = create<useShoesType>()((set) => ({
  selectedShoe: null,
  selectedSize: null,
  setSelectedSize: (size) => {
    set({ selectedSize: size });
  },
}));

export type cartType = {
  name: string;
  image: string;
  quantity: number;
  id: string;
  shoeID: number;
  brand: string;
  size?: string[];
  price: number;
  selected: boolean;
};
export type favoritesType = {
  name: string;
  price: number;

  brand: string;
  image: string;
  id: number;
};
type useFavoriteType = {
  favorites: favoritesType[];
  addFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};
type useCartType = {
  cart: cartType[];
  addCart: (newShoe: cartType) => void;
  setCart: (cart: cartType[] | ((prevCart: cartType[]) => cartType[])) => void;
};

export const useFavorite = create<useFavoriteType>()((set, get) => ({
  favorites: favoritesData,
  isFavorite: (id: number) => {
    const { favorites } = get();
    const isAlreadyInFavorite = favorites.some((shoe) => shoe.id === id);
    return isAlreadyInFavorite;
  },
  addFavorite: (id: number) => {
    const { favorites } = get();

    const isAlreadyInFavorite = favorites.some((shoe) => shoe.id === id);

    if (!isAlreadyInFavorite) {
      const newFavInfo = shoes.find((shoe) => shoe.id === id);
      if (newFavInfo) {
        const newFavoriteData = {
          name: newFavInfo?.name,
          price: newFavInfo?.price,

          brand: newFavInfo?.brand,
          image: newFavInfo?.images[0],
          id: newFavInfo?.id,
        };
        set({ favorites: [...favorites, newFavoriteData] });
      }
    } else {
      const updatedFavorite = favorites.filter((shoe) => shoe.id !== id);
      set({ favorites: updatedFavorite });
    }
  },
}));

export const useCart = create<useCartType>((set, get) => ({
  cart: cartData.map((shoe) => ({
    ...shoe,
    selected: false,
    id: crypto.randomUUID(),
    shoeID: shoe.id,
  })),
  setCart: (newCart) =>
    set((state) => ({
      cart: typeof newCart === "function" ? newCart(state.cart) : newCart,
    })),
  addCart: (newShoe: cartType) => {
    const { cart } = get();
    const isAlreadyInCart = cart.some(
      (shoe) => shoe.id === newShoe.id && shoe.size === newShoe.size
    );

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

export type orderItemType = {
  name: string;
  image: string;
  quantity: number;
  shoeID: number;
  brand: string;
  size?: string[];
  price: number;
  selected: boolean;
};
type orderType = {
  orderId: string;
  orderItem: orderItemType[];
};
type useOrderType = {
  order: orderType[];
  addOrder: (newOrder: orderType) => void;
};

export const useOrder = create<useOrderType>((set) => ({
  order: [],
  addOrder: (newOrder: orderType) =>
    set((state) => ({
      order: [...state.order, newOrder], // Add the new order to the array
    })),
}));
