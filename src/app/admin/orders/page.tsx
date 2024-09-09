import React from "react";
import { DataTable, OrderType } from "../_components/data-table";
import { OrdersColumn } from "./_components/OrdersColumn";
import { shoes } from "@/utils/data";

async function getData(): Promise<OrderType[]> {
  // Fetch data from your API here.

  const data = shoes.slice(0, 5).map((shoe) => {
    return {
      id: crypto.randomUUID(),
      customer: "Gee Jay",
      customerId: crypto.randomUUID(),
      deliveryAddress: "Dimasarsarakan",
      status: "pending",
      pricePaid: 50000,
      shoesName: shoe.name,
      quantity: 5,
      shoeId: shoe.id.toString(),
    };
  });

  return [
    ...data,
    {
      id: crypto.randomUUID(),
      customer: "Popong",
      customerId: crypto.randomUUID(),
      deliveryAddress: "Metro Manila",
      status: "Shipped",
      pricePaid: 50000,
      shoesName: "name of shoe",
      quantity: 5,
      shoeId: "190898791",
    },
  ];
}
export default async function Orders() {
  const data = await getData();
  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={OrdersColumn} data={data} />
    </div>
  );
}
