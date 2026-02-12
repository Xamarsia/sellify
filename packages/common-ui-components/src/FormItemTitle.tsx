"use client";

import { ReactNode } from "react";

type FormItemTitleProps = {
  title: string;
  required?: boolean;
  children: ReactNode;
};

export default function FormItemTitle({
  title,
  required,
  children,
}: FormItemTitleProps) {
  return (
    <div className="flex flex-col w-full">
      <label
        className={`label text-black m-1 capitalize ${required && "after:content-['*'] after:ml-0.5"}`}
      >
        {title}
      </label>
      {children}
    </div>
  );
}
