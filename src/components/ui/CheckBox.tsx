"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";

interface CheckboxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  autoFocus?: boolean;
  fill?: boolean;
  isChecked?: boolean;
  className?: string;
}

export default function Checkbox({
  autoFocus = false,
  fill = false,
  isChecked = false,
  className,
  ...props
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLButtonElement | null>(null); // Specify the type here

  useEffect(() => {
    if (autoFocus && checkboxRef.current) {
      checkboxRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <button
      {...props}
      ref={checkboxRef}
      tabIndex={0}
      className={cn(
        `
      flex items-center justify-center w-6 h-6
      rounded cursor-pointer border
      focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-20
      ${
        fill
          ? isChecked
            ? "hover:opacity-80 bg-black text-white"
            : "text-white hover:text-slate-400"
          : isChecked
          ? "hover:opacity-80 text-slate-400"
          : "text-white hover:text-slate-400"
      }
    `,
        className
      )}
    >
      <CheckIcon className='w-5 h-5' />
    </button>
  );
}

function CheckIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M20 6 9 17l-5-5' />
    </svg>
  );
}
