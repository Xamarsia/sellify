"use client";

import { ChangeEvent, ReactNode } from "react";

type InputProps = {
  value?: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  state?: "invalid" | "valid";
  type?: "text" | "email" | "password";
  icon?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type = "text",
  required,
  state,
  value,
  disabled,
  maxLength,
  placeholder,
  icon,
  onChange,
}: InputProps) {
  return (
    <div
      className={`flex items-center justify-center h-13 p-4 w-full bg-white text-black body 
          border border-stroke has-focus:border-black has-enabled:hover:border-black rounded-lg 
          ${state == "invalid" && "[&:not(:placeholder-shown):not(:focus-within)]:border-destructive"} `}
    >
      {icon && <label className="text-placeholder pr-4">{icon}</label>}
      <input
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`size-full placeholder-placeholder focus:outline-hidden disabled:text-disabled`}
      />
    </div>
  );
}
