"use client";

import { ShoeTypes } from "@/utils/types/shoeTypes";
import { ColumnDef, SortingFn, sortingFns } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import {
  RankingInfo,
  rankItem,
  compareItems,
} from "@tanstack/match-sorter-utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  let dir = 0;

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank!,
      rowB.columnFiltersMeta[columnId]?.itemRank!
    );
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

export const columns: ColumnDef<ShoeTypes, any>[] = [
  {
    accessorKey: "id",
    header: () => <h6 className='text-base font-semibold'>Id</h6>,
    filterFn: "includesString",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <button
          className='flex items-center font-semibold'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    filterFn: "fuzzy", //using our custom fuzzy filter function
    // filterFn: fuzzyFilter, //or just define with the function
    sortingFn: fuzzySort,
  },
  {
    accessorKey: "brand",
    header: () => <h6 className='text-base font-semibold'>Brand</h6>,
    filterFn: "includesStringSensitive",
  },
  {
    accessorKey: "stock",
    header: () => (
      <h6 className='text-center text-base font-semibold'>Stock</h6>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("stock"));

      return <div className='text-center font-medium'>{amount}</div>;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <button
          className='flex items-center w-full justify-end text-right font-semibold'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PHP",
      }).format(amount);

      return <div className='text-right font-medium'>{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='bg-white'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <button>Edit Details</button>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <button>View Details</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className='text-red-400'>Delete shoe</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
