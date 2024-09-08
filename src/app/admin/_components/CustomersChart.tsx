"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", active: 186, inactive: 80 },
  { month: "February", active: 305, inactive: 200 },
  { month: "March", active: 237, inactive: 120 },
  { month: "April", active: 73, inactive: 190 },
  { month: "May", active: 209, inactive: 130 },
  { month: "June", active: 214, inactive: 140 },
];

const chartConfig = {
  active: {
    label: "Active",
    color: "hsl(var(--chart-3))",
  },
  inactive: {
    label: "Inactive",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function CustomersCart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customers</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey='active'
              stackId='a'
              fill='var(--color-active)'
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey='inactive'
              stackId='a'
              fill='var(--color-inactive)'
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Customers are up by 2.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing total Customers for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
