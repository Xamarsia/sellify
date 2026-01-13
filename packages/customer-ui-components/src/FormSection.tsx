"use client";

import { ReactNode } from "react";

type FormSectionProps = {
  title: string;
  children: ReactNode;
};

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <h3>{title}</h3>
      <div className="flex items-start flex-col gap-4">{children}</div>
    </div>
  );
}
