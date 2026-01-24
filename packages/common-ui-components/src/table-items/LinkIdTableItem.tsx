"use client";

import { ReactNode } from "react";

type LinkTableItemProps = {
  href?: string;
  text: ReactNode;
};

export default function LinkIdTableItem({ href, text }: LinkTableItemProps) {
  return (
    <div className="flex items-center gap-1">
      #
      <a
        href={href}
        className={`flex underline-offset-4 hover:underline cursor-pointer body`}
      >
        <p className="text-justify line-clamp-3">
          {text}
        </p>
      </a>
    </div>
  );
}
