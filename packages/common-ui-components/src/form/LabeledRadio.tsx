"use client";

import Radio from "../input/Radio";

type LabeledRadioProps = {
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  label?: string;
  readOnly?: boolean;
  onChange: (isChecked: boolean, value?: string) => void;
};

export default function LabeledRadio({
  checked,
  disabled,
  value,
  label,
  readOnly,
  onChange,
}: LabeledRadioProps) {
  return (
    <div className="flex gap-4 group">
      <Radio
        value={value}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
        readOnly={readOnly}
      />
      <label
        htmlFor={`radio-${value}`}
        className={`body ${disabled ? "text-disabled" : "text-black"}`}
      >
        {label}
      </label>
    </div>
  );
}
