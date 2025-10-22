"use client";

import { ChangeEvent } from "react";

import CheckIcon from "@sellify/common-icons/check";

type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({
  checked,
  disabled,
  value,
  label,
  onChange,
}: CheckboxProps) {
  return (
    <div className="flex gap-4 group">
      <label className="relative flex items-center">
        <input
          type="checkbox"
          value={value}
          disabled={disabled}
          onChange={onChange}
          defaultChecked={checked}
          id={`checkbox-${value}`}
          className="peer size-5 appearance-none rounded-md border border-stroke bg-primary group-hover:border-black 
            enabled:hover:border-black focus:border-black checked:bg-black checked:border-black checked:disabled:bg-disabled
            enabled:checked:border-black enabled:cursor-pointer disabled:cursor-not-allowed disabled:border-disabled"
        />
        <span
          className="absolute text-primary opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <CheckIcon style="size-3 stroke-4" />
        </span>
      </label>
      <label
        htmlFor={`checkbox-${value}`}
        className={`body ${disabled ? "text-disabled" : "text-black"} `}
      >
        {label}
      </label>
    </div>
  );
}
