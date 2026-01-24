"use client";

import { ChangeEvent } from "react";

import MagnifyingGlass from "@sellify/common-icons/magnifying-glass";

import Input from "./Input";

type SearchInputProps = {
  value: string;
  fill?: "default" | "parent";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  value,
  onChange,
  fill = "default",
}: SearchInputProps) {
  const fillStyle = {
    default: "w-94",
    parent: "w-full",
  }[fill];

  return (
    <div className={`flex ${fillStyle}`}>
      <Input
        type="text"
        value={value}
        placeholder="Search for..."
        onChange={onChange}
        icon={<MagnifyingGlass style="size-5" />}
        required
      />
    </div>
  );
}
