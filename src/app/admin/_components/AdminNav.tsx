"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps, ReactNode } from "react";

export function Nav({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <nav className={cn("flex justify-center gap-8 my-5 ", className)}>
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link {...props} className={cn(pathname === props.href && "underline")} />
  );
}
