import React from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function BreadCrumbs({ brand }: { brand?: string | undefined }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='/'>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='/shoes'>Shoes</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {brand && (
          <>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <p className='pointer-events-none text-gray-500 capitalize'>
                {brand}
              </p>
            </BreadcrumbItem>{" "}
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
