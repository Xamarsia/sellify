"use client";

import MagnifyingGlassIcon from "@sellify/common-icons/magnifying-glass";

import Input from "./Input";

type SearchInputProps = {
  value: string;
  onChange: (query: string) => void;
  onSubmit?: () => void;
};

export default function SearchInput({
  value,
  onChange,
  onSubmit,
}: SearchInputProps) {
  return (
    <form onSubmit={onSubmit} className="flex w-full">
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
