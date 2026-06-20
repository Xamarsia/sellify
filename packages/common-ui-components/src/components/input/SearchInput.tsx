"use client";

import MagnifyingGlassIcon from "@sellify/common-icons/magnifying-glass";

import Input from "./Input";

type SearchInputProps = {
  value: string;
  onChange: (query: string) => void;
  onSubmit?: () => void;
};

/**
 * Renders a required search input inside a form.
 *
 * The input includes a search icon and submits through the optional form
 * callback.
 *
 * @param value - Current search query
 * @param onChange - Callback invoked with the updated search query
 * @param onSubmit - Optional callback invoked when the search form is submitted
 */
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
