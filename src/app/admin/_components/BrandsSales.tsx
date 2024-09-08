"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label list";

const chartData = [
  { status: "delivered", total: 275, fill: "var(--color-delivered)" },
  { status: "pending", total: 200, fill: "var(--color-pending)" },
  { status: "shipped", total: 187, fill: "var(--color-shipped)" },
  { status: "canceled", total: 173, fill: "var(--color-canceled)" },
];

const chartConfig = {
  sales: {
    label: "sales",
  },
  delivered: {
    label: "Delivered",
    color: "hsl(var(--chart-1))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-2))",
  },
  shipped: {
    label: "Shipped",
    color: "hsl(var(--chart-3))",
  },
  canceled: {
    label: "Canceled",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function BrandsSales() {
  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Order Status</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} label nameKey='status' dataKey='total'>
              <LabelList
                dataKey='status'
                className='fill-background'
                stroke='white'
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}
