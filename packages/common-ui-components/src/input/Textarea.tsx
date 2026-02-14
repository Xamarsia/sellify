"use client";

import { ChangeEvent } from "react";

type TextareaProps = {
  value?: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  state?: "invalid" | "valid";
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
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
  return (
    <textarea
      value={value}
      required={required}
      onChange={onChange}
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
