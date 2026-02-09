"use client";

import Button from "@sellify/common-ui-components/buttons/Button";

type SettingsSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  type?: "default" | "destructive";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function SettingsSection({
  title,
  type = "default",
  description,
  buttonText,
  onClick,
}: SettingsSectionProps) {
  const variantStyle = {
    default: "text-default",
    destructive: "text-destructive",
  }[type];

  return (
    <div className="flex w-full px-4 py-3 gap-4 border border-stroke rounded-lg items-center">
      <div className="flex flex-col grow gap-2 flex w-7/9">
        <h3 className={variantStyle}>{title}</h3>
        <p className="text-placeholder"> {description}</p>
      </div>
      <div className="flex w-2/9 justify-center truncate">
        <Button variant={type} onClick={onClick} fill="parent">
          <p className="truncate">{buttonText}</p>
        </Button>
      </div>
    </div>
  );
}
