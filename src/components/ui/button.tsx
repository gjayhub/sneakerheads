import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
type ButtonType = {
  type: "primary" | "secondary";
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;
export default function Button({
  type,
  children,
  className,
  ...props
}: ButtonType) {
  return (
    <button
      className={cn(
        "[border-radius:3px] px-2",
        type === "primary"
          ? "bg-black text-white"
          : " border-black border-2    ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
