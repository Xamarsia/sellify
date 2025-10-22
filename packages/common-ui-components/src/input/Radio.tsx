"use client";

import { ChangeEvent } from "react";

type RadioProps = {
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Radio({
  checked,
  disabled,
  value,
  label,
  onChange,
}: RadioProps) {
  return (
    <div className="flex gap-4 group">
      <label className="relative flex items-center">
        <input
          type="radio"
          value={value}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
          id={`radio-${value}`}
          className="peer size-5 appearance-none rounded-full border border-stroke group-hover:border-black
            bg-primary enabled:hover:border-black focus:border-black disabled:border-disabled
            enabled:checked:border-black enabled:cursor-pointer disabled:cursor-not-allowed"
        />
        <span
          className="absolute pointer-events-none bg-black peer-disabled:bg-disabled 
            size-2.5 rounded-full opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2"
        />
      </label>
      <label
        htmlFor={`radio-${value}`}
        className={`body ${disabled ? "text-disabled" : "text-black"}`}
      >
        {label}
      </label>
    </div>
  );
}
