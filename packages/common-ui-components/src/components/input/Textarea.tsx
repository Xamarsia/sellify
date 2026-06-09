"use client";

import { ChangeEvent, useCallback } from "react";

type TextareaProps = {
  value?: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  state?: "invalid" | "valid";
  onChange: (newValue: string) => void;
};

export default function Textarea({
  required,
  state,
  value,
  disabled,
  maxLength,
  placeholder,
  onChange,
}: TextareaProps) {
  const onValueChanged = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>): void => {
      e.preventDefault();
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <textarea
      value={value}
      required={required}
      onChange={onValueChanged}
      disabled={disabled}
      maxLength={maxLength}
      placeholder={placeholder}
      className={`resize-none h-40 p-4 border border-stroke placeholder-placeholder rounded-lg
          focus:outline-hidden disabled:text-disabled disabled:cursor-not-allowed
          body text-black bg-white enabled:hover:border-black focus:border-black
          ${state === "invalid" && "[&:not(:placeholder-shown):not(:focus)]:border-destructive"}`}
    />
  );
}
