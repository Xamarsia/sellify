"use client";

import { ChangeEvent } from "react";

type InputProps = {
  title?: string;
  value?: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  state?: "invalid" | "valid";
  type?: "text" | "email" | "password";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type = "text",
  title,
  required,
  state,
  value,
  disabled,
  maxLength,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col w-full">
      <label
        className={`label text-black m-1 capitalize ${required && "after:content-['*'] after:ml-0.5"}`}
      >
        {title}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`h-13 p-4 border border-stroke placeholder-placeholder rounded-lg
          disabled:text-disabled disabled:cursor-not-allowed
          text-black body bg-white enabled:hover:border-black  
          focus:outline-hidden focus:border-black 
          ${state == "invalid" && "[&:not(:placeholder-shown):not(:focus)]:border-destructive"}`}
      />
    </div>
  );
}
