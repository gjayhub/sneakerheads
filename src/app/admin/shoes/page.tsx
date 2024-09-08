import { shoes } from "@/utils/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { ShoeTypes } from "@/utils/types/shoeTypes";

async function getData(): Promise<ShoeTypes[]> {
  // Fetch data from your API here.
  const data = shoes;
  return data;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
