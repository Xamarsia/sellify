"use client";

import { ReactNode } from "react";

type FormSectionProps = {
  title: string;
  children: ReactNode;
};

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="flex w-full flex-col">
      <h3>{title}</h3>
      <div className="flex grow items-start py-9 ">{children}</div>
    </div>
  );
}
