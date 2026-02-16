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
      <div className="flex grow justify-between items-start gap-6 md:gap-16 flex-col md:flex-row">
        <p className="flex w-full md:w-7/9">{description}</p>
        <div className="w-2/5 md:w-2/9 justify-center shrink-0">{children}</div>
      </div>
    </div>
  );
}
