import React from "react";
import { TotalSales } from "./_components/TotalSalesChart";
import { BrandsSales } from "./_components/BrandsSales";
import { CustomersCart } from "./_components/CustomersChart";
import { ProductsChart } from "./_components/Products";

function AdminDashboard() {
  return (
    <main className=' grid grid-cols-2 max-w-[1300px] mx-auto gap-10'>
      <div>
        <TotalSales />
      </div>

      <div>
        <CustomersCart />
      </div>
      <div>
        <BrandsSales />
      </div>
      <div>
        <ProductsChart />
      </div>
    </main>
  );
}

export default AdminDashboard;
