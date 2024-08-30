import { shoes } from "@/utils/data";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const {
    minPrice,
    maxPrice,
    size,
    sort,
    page = 1,
    offset = 12,
    brand,
  } = Object.fromEntries(searchParams.entries());

  // Convert to numbers where appropriate
  const minPriceNum = minPrice ? parseFloat(minPrice) : 0;
  const maxPriceNum = maxPrice ? parseFloat(maxPrice) : Infinity;
  const pageNum = parseInt(page as string, 10) || 1;
  const offsetNum = parseInt(offset as string, 10) || 12;

  // Convert size to an array
  const sizesArray = size ? (size as string).split(",").map(parseFloat) : [];

  // Filter the shoes
  let filteredShoes = shoes.filter((shoe) => {
    const isWithinPriceRange =
      shoe.price >= minPriceNum && shoe.price <= maxPriceNum;
    const isMatchingBrand = brand
      ? shoe.brand.toLowerCase() === brand.toLowerCase()
      : true;
    const isMatchingSize =
      sizesArray.length > 0
        ? shoe.availableSizes.some((availableSize) =>
            sizesArray.includes(parseFloat(availableSize))
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

  return new Response(
    JSON.stringify({ data: paginatedShoes, total: filteredShoes.length }),
    { status: 200 }
  );
}
