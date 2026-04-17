"use client";

import { ChangeEvent } from "react";
import Checkbox from "../input/Checkbox";

type LabeledCheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  value: string;
  label?: string;
  readOnly?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function LabeledCheckbox({
  checked,
  disabled,
  value,
  label,
  readOnly,
  onChange,
}: LabeledCheckboxProps) {
  return (
    <div className="flex gap-4 group">
      <Checkbox
        value={value}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
        readOnly={readOnly}
      />
      <label
        htmlFor={`checkbox-${value}`}
        className={`body ${disabled ? "text-disabled" : "text-black"} `}
      >
        {label}
      </label>
    </div>
  );
}
