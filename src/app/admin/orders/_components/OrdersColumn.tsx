"use client";

import { ShoeTypes } from "@/utils/types/shoeTypes";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Button from "@/components/ui/button";
import { OrderType } from "../../_components/data-table";

export const OrdersColumn: ColumnDef<OrderType>[] = [
  {
    accessorKey: "id",
    header: () => <h6 className='text-base font-semibold'>Order Id</h6>,
  },
  {
    accessorKey: "customer",
    header: ({ column }) => {
      return (
        <button
          className='flex items-center font-semibold'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </button>
      );
    },
  },
  {
    accessorKey: "deliveryAddress",
    header: () => <h6 className='text-base font-semibold'>Address</h6>,
  },
  {
    accessorKey: "quantity",
    header: () => (
      <h6 className='text-base text-center font-semibold'>Quantity</h6>
    ),
    cell: ({ row }) => {
      return (
        <div className='text-center font-medium'>
          {row.getValue("quantity")}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <h6 className='text-base font-semibold'>Status</h6>,
  },

  {
    id: "actions",
    cell: ({ row }) => (
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
            <button>Edit Order</button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button>View Details</button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button className='text-red-400'>Delete Order</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
