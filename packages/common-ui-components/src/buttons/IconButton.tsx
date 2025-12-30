"use client";

import { ReactNode } from "react";

type IconButtonProps = {
  variant?: "default" | "outline";
  type?: "button" | "submit";
  disabled?: boolean;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function IconButton({
  variant = "default",
  type = "button",
  disabled,
  children,
  onClick,
}: IconButtonProps) {
  const variantStyle = {
    default:
      "text-white bg-primary-hover enabled:hover:bg-primary active:bg-primary-hover disabled:bg-disabled",
    outline:
      "text-black bg-white border border-stroke enabled:hover:border-black enabled:active:border-black disabled:text-disabled",
  }[variant];

  return (
    <button
      type={type}
      className={`flex justify-center items-center rounded-lg 
        enabled:cursor-pointer disabled:cursor-not-allowed body size-10 min-w-10
        ring-primary-outline enabled:active:ring-4 ${variantStyle}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
