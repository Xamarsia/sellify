"use client";

import { ReactNode } from "react";

type LinkButtonProps = {
  children: ReactNode;
  href?: string;
};

export default function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <a
      href={href}
      className={`flex items-center gap-x-2 m-1 underline-offset-4 hover:underline cursor-pointer body`}
    >
      {children}
    </a>
  );
}
