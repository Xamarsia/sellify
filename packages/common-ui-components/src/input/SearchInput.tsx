"use client";

import { ChangeEvent, FormEvent } from "react";

import MagnifyingGlassIcon from "@sellify/common-icons/magnifying-glass";
import { Size } from "@sellify/common-icons/enums";

import Input from "./Input";

type SearchInputProps = {
  value: string;
  fill?: "default" | "parent";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

export default function SearchInput({
  value,
  onChange,
  onSubmit,
  fill = "default",
}: SearchInputProps) {
  const fillStyle = {
    default: "w-94",
    parent: "w-full",
  }[fill];

  return (
    <form className={`flex ${fillStyle}`} onSubmit={onSubmit}>
      <Input
        type="text"
        value={value}
        placeholder="Search for..."
        onChange={onChange}
        icon={<MagnifyingGlassIcon size={Size.md} />}
        required
      />
    </form>
  );
}
