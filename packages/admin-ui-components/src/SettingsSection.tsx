"use client";

import { ReactNode } from "react";

type SettingsSectionProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function SettingsSection({
  title,
  description,
  children,
}: SettingsSectionProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <h3>{title}</h3>
      <div className="flex grow justify-between items-start gap-16 ">
        <p className="flex w-7/9">{description}</p>
        <div className="flex w-2/9 justify-center">{children}</div>
      </div>
    </div>
  );
}
