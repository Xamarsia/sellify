"use client";

import { ChangeEvent, ReactNode, useCallback } from "react";

type InputProps = {
  value?: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  state?: "invalid" | "valid";
  type?: "text" | "email" | "password";
  icon?: ReactNode;
  onChange: (newValue: string) => void;
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
  const onValueChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <div
      className={`flex items-center justify-center h-13 p-4 w-full bg-white text-black body
          border border-stroke has-focus:border-black has-enabled:hover:border-black rounded-lg
          ${state === "invalid" && "[&:not(:placeholder-shown):not(:focus-within)]:border-destructive"} `}
    >
      {icon && <label className="text-placeholder pr-4 *:h-5">{icon}</label>}
      <input
        type={type}
        value={value}
        required={required}
        onChange={onValueChanged}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`size-full placeholder-placeholder focus:outline-hidden disabled:text-disabled`}
      />
    </div>
  );
}
