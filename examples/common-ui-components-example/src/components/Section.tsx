"use client";

import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: Props) {
  return (
    <>
      <div className="bg-white border-t border-stroke px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="text-gray-900">{title}</h2>
      </div>

      <div className="flex flex-col justify-center  max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  );
}
