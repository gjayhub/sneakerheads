"use server";

import { shoes } from "../data";
import { ShoeTypes } from "../types/shoeTypes";

interface GetShoesResult {
  data: ShoeTypes | undefined;
}

export const getShoeById = (id: number): Promise<GetShoesResult> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shoe = shoes.find((shoe) => shoe.id === id);
      resolve({ data: shoe });
    }, 1000);
  });
};
