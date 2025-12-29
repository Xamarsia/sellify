"use client";

import { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
};

export default function SectionItem({ title, children }: Props) {
  return (
    <>
      {title && (
        <div className="bg-white px-4 sm:px-6 lg:px-8 py-2">
          <h3 className="text-gray-900">{title}</h3>
        </div>
      )}

      <div className="flex flex-row gap-4 justify-between px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </div>
    </>
  );
}
