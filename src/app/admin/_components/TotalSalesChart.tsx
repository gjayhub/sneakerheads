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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", vans: 186, nike: 80, converse: 146, adidas: 80 },
  { month: "February", vans: 305, nike: 200, converse: 126, adidas: 100 },
  { month: "March", vans: 237, nike: 120, converse: 196, adidas: 40 },
  { month: "April", vans: 73, nike: 190, converse: 126, adidas: 50 },
  { month: "May", vans: 209, nike: 130, converse: 156, adidas: 10 },
  { month: "June", vans: 214, nike: 140, converse: 106, adidas: 90 },
];

const chartConfig = {
  vans: {
    label: "Vans",
    color: "hsl(var(--chart-1))",
  },
  nike: {
    label: "Nike",
    color: "hsl(var(--chart-2))",
  },
  converse: {
    label: "Converse",
    color: "hsl(var(--chart-3))",
  },
  adidas: {
    label: "Adidas",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function TotalSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Per Month</CardTitle>
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
            <Bar dataKey='vans' fill='var(--color-vans)' radius={4} />
            <Bar dataKey='nike' fill='var(--color-nike)' radius={4} />
            <Bar dataKey='converse' fill='var(--color-converse)' radius={4} />
            <Bar dataKey='adidas' fill='var(--color-adidas)' radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Vans is selling up by 30.2% the first half of the year{" "}
          <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing total sales for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
