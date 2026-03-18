"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SectionItem({ children }: Props) {
  return (
    <>
      <div className="flex flex-row gap-4 justify-between px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </div>
    </>
  );
}
