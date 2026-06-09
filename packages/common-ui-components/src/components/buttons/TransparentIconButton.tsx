"use client";

import { ReactNode } from "react";

type TransparentIconButtonProps = {
  variant?: "default" | "destructive" | "white";
  type?: "button" | "submit";
  disabled?: boolean;
  icon: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function TransparentIconButton({
  size = "md",
  variant = "default",
  type = "button",
  disabled,
  icon,
  onClick,
}: TransparentIconButtonProps) {
  const variantStyle = {
    default: "text-secondary enabled:hover:text-black disabled:text-disabled",
    white: "text-white/90 enabled:hover:text-white disabled:text-white/40",
    destructive:
      "text-destructive enabled:hover:text-destructive-icon-hover disabled:text-destructive-disabled",
  }[variant];

  const iconSize = {
    xs: "*:h-4",
    sm: "*:h-5",
    md: "*:h-6",
    lg: "*:h-7",
    xl: "*:h-8",
  }[size];

  return (
    <button
      type={type}
      className={`flex justify-center items-center rounded-lg enabled:cursor-pointer
        disabled:cursor-not-allowed body min-w-6 ${variantStyle} ${iconSize}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
