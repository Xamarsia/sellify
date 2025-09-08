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
      "text-white bg-[#383838] enabled:hover:bg-[#242424] focus:bg-[#383838] disabled:bg-disabled",
    outline:
      "text-black bg-primary border border-stroke enabled:hover:border-black focus:border-black disabled:text-disabled",
  }[variant];

  return (
    <button
      type={type}
      className={`flex justify-center items-center rounded-lg enabled:cursor-pointer disabled:cursor-not-allowed
                    body size-10 min-w-10
                    ring-stroke focus:ring-4
                    ${variantStyle}
            `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
