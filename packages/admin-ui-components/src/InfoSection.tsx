"use client";

import { ReactNode } from "react";

type InfoSectionProps = {
  title: string;
  children: ReactNode;
};

export default function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <div className="flex w-full flex-col gap-6">
      <h3>{title}</h3>
      <div className="flex items-start flex-col gap-4">{children}</div>
    </div>
  );
}
