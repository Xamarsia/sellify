"use client";

import { ReactNode } from "react";

type TransparentIconButtonProps = {
  variant?: "default" | "destructive" | "white";
  type?: "button" | "submit";
  disabled?: boolean;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function TransparentIconButton({
  variant = "default",
  type = "button",
  disabled,
  children,
  onClick,
}: TransparentIconButtonProps) {
  const variantStyle = {
    default: "text-secondary enabled:hover:text-black disabled:text-disabled",
    white: "text-white/90 enabled:hover:text-white disabled:text-white/40",
    destructive:
      "text-destructive enabled:hover:text-destructive-icon-hover disabled:text-destructive-disabled",
  }[variant];

  return (
    <button
      type={type}
      className={`flex justify-center items-center rounded-lg enabled:cursor-pointer 
        disabled:cursor-not-allowed body size-6 min-w-6 ${variantStyle}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
