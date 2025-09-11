"use client";

import MagnifyingGlass from "@sellify/common-icons/magnifying-glass";
import { ChangeEvent } from "react";

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
    <div
      className={`flex items-center justify-center h-13 p-4 gap-4
            rounded-lg border border-stroke has-focus:border-black hover:border-black
            ${fillStyle}
        `}
    >
      <label className="text-placeholder">
        <MagnifyingGlass style="size-5" />
      </label>

      <input
        type="text"
        name="search"
        value={value}
        placeholder="Search for..."
        onChange={onChange}
        required
        className={`w-full h-full text-left text-black focus:outline-hidden `}
      />
    </div>
  );
}
