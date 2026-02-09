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
  onClick
}: SettingsSectionProps) {

  const variantStyle = {
    default:
      "text-default",
    destructive:
      "text-destructive",
  }[type];

  return (
    <>
      <div className="flex px-4 py-3 gap-4 border border-stroke rounded-lg items-center">
        <div className="flex flex-col grow gap-2">
          <h3 className={variantStyle}>{title}</h3>
          <p className="text-placeholder"> {description}</p>
        </div>
        <Button variant={type} onClick={onClick}>{buttonText}</Button>
      </div>
    </>
  );
}
