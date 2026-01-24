"use client";

import { ChangeEvent } from "react";

import Input from "./Input";

type FormInputItemProps = {
  title: string;
  value: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  state?: "invalid" | "valid";
  type?: "text" | "email" | "password";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function FormInputItem({
  type = "text",
  title,
  required,
  state,
  value,
  disabled,
  maxLength,
  placeholder,
  onChange,
}: FormInputItemProps) {
  return (
    <div className="flex flex-col w-full">
      <label
        className={`label text-black m-1 capitalize ${required && "after:content-['*'] after:ml-0.5"}`}
      >
        {title}
      </label>
      <Input
        type={type}
        state={state}
        value={value}
        required={required}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </div>
  );
}
