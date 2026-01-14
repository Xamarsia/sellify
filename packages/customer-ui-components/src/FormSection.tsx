"use client";

import { FormEvent, ReactNode } from "react";

type FormSectionProps = {
  children: ReactNode;
  onChange?: (e: FormEvent<HTMLFormElement>) => void;
};

export default function FormSection({ children, onChange }: FormSectionProps) {
  return (
    <form onChange={onChange} className="flex flex-col w-full gap-4">
      {children}
    </form>
  );
}
