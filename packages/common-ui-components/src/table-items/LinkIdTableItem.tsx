"use client";

import { ReactNode } from "react";

type LinkIdTableItemProps = {
  href?: string;
  text: ReactNode;
};

export default function LinkIdTableItem({ href, text }: LinkIdTableItemProps) {
  return (
    <div className="flex items-center gap-1">
      #
      <a
        href={href}
        className={`flex underline-offset-4 hover:underline cursor-pointer body`}
      >
        <p className="text-justify line-clamp-3 break-all min-w-20 not-sm:pl-14">
          {text}
        </p>
      </a>
    </div>
  );
}
