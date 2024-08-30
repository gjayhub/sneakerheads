"use server";

export const getShoes = async (searchParams = {}) => {
  const query = new URLSearchParams(searchParams).toString();
  const response = await fetch(`http://localhost:3000/api/shoes?${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch shoes: ${response.statusText}`);
  }

  const shoes = await response.json();

  return shoes;
};
