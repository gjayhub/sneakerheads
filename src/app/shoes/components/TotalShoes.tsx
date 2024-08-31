import { getShoes } from "@/utils/actions/getShoes";
import React from "react";

export default async function TotalShoes({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { total } = await getShoes({
    ...searchParams,
    page: 1,
    offset: 12,
  });
  return <p className='text-gray-400'>{total}</p>;
}
