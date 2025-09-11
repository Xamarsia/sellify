"use client";

import { ReactNode } from "react";

type SettingsItemProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function SettingsItem({
  title,
  description,
  children,
}: SettingsItemProps) {
  return (
    <div className="flex w-full flex-col">
      <h3>{title}</h3>
      <div className="flex grow justify-between items-start gap-16 py-9 ">
        <p className="flex w-7/9">{description}</p>
        <div className="flex w-2/9 justify-center">{children}</div>
      </div>
    </div>
  );
}
