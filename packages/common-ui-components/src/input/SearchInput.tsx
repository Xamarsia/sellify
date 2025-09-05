"use client";

import MagnifyingGlass from "@sellify/common-icons/magnifying-glass";
import { ChangeEvent } from "react";

type SearchInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div
      className={`flex items-center justify-center h-13 w-94 p-4 gap-4
            rounded-lg border border-stroke has-focus:border-black hover:border-black
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
