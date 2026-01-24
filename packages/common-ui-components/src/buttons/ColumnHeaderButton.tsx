"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  selected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ColumnHeaderButton({
  children,
  selected,
  onClick,
}: Props) {
  return (
    <button
      className={`flex cursor-pointer body  ${selected ? "text-black" : "text-disabled"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
