"use client";

import MagnifyingGlassIcon from "@sellify/common-icons/magnifying-glass";

import Input from "./Input";

type SearchInputProps = {
  value: string;
  fill?: "default" | "parent";
  onChange: (query: string) => void;
  onSubmit?: () => void;
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
        icon={<MagnifyingGlassIcon />}
        required
      />
    </form>
  );
}
