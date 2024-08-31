"use server";

import { shoes } from "../data";
import { ShoeTypes } from "../types/shoeTypes";

interface GetShoesResult {
  data: ShoeTypes[];
  total: number;
}

export const getShoes = ({
  minPrice,
  maxPrice,
  size,
  sort,
  page = 1,
  offset = 24,
  brand,
}: {
  minPrice?: string;
  maxPrice?: string;
  size?: string;
  sort?: string;
  page?: number;
  offset?: number;
  brand?: string;
}): Promise<GetShoesResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const minPriceNum = minPrice ? parseFloat(minPrice) : 0;
      const maxPriceNum = maxPrice ? parseFloat(maxPrice) : Infinity;
      const pageNum = page || 1;
      const offsetNum = offset || 12;

      // Convert size to an array
      const sizesArray = size ? size.split(",").map(Number) : [];

      // Filter the shoes
      let filteredShoes = shoes.filter((shoe) => {
        const isWithinPriceRange =
          shoe.price >= minPriceNum && shoe.price <= maxPriceNum;
        const isMatchingBrand = brand
          ? shoe.brand.toLowerCase() === brand.toLowerCase()
          : true;
        const isMatchingSize =
          sizesArray.length > 0
            ? sizesArray.every((s) =>
                shoe.availableSizes.includes(s.toString())
              )
            : true;

        return isWithinPriceRange && isMatchingBrand && isMatchingSize;
      });

      // Sort the shoes
      if (sort === "price_desc") {
        filteredShoes.sort((a, b) => b.price - a.price);
      } else if (sort === "price_asc") {
        filteredShoes.sort((a, b) => a.price - b.price);
      }

      // Implement pagination
      const startIndex = (pageNum - 1) * offsetNum;
      const paginatedShoes = filteredShoes.slice(
        startIndex,
        startIndex + offsetNum
      );

      resolve({ data: paginatedShoes, total: filteredShoes.length });
    }, 1000); // Simulate a 1-second delay
  });
};
