"use client";

import { ReactNode } from "react";

type ButtonProps = {
  size?: "default" | "small";
  variant?: "default" | "outline" | "destructive";
  type?: "button" | "submit";
  fill?: "content" | "parent";
  disabled?: boolean;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  size = "default",
  variant = "default",
  type = "button",
  fill = "content",
  disabled,
  children,
  onClick,
}: ButtonProps) {
  const variantStyle = {
    default:
      "text-white bg-primary-hover ring-primary-outline enabled:hover:bg-primary active:bg-primary-hover disabled:bg-disabled",
    outline:
      "text-black bg-white ring-primary-outline border border-stroke enabled:hover:border-black enabled:active:border-black disabled:text-disabled",
    destructive:
      "text-white bg-destructive ring-destructive-outline enabled:hover:bg-destructive-hovered disabled:bg-destructive-disabled",
  }[variant];

  const sizeStyle = {
    default: "h-13",
    small: "h-10",
  }[size];

  const fillStyle = {
    content: "",
    parent: "w-full",
  }[fill];

  return (
    /* External div for anti-flex */
    <div className={`${fillStyle} shrink-0`}>
      <button
        type={type}
        className={`flex justify-center body items-center px-6 gap-x-4 rounded-lg enabled:active:ring-4 group 
          enabled:cursor-pointer disabled:cursor-not-allowed ${variantStyle} ${sizeStyle} ${fillStyle}
        `}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
