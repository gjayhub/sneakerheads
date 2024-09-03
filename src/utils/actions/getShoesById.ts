"use server";

import { shoes } from "../data";
import { ShoeTypes } from "../types/shoeTypes";

interface GetShoesResult {
  data: ShoeTypes;
}

export const getShoeById = (id: number): Promise<GetShoesResult> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shoe = shoes.find((shoe) => shoe.id === id);
      if (shoe) {
        resolve({ data: shoe });
      }
    }, 1000);
  });
};
