"use client";

import { useCallback } from "react";

type DropdownItemProps<T> = {
  value: T;
  label: string;
  selected?: boolean;
  onItemSelected: (value: T, label: string) => void;
};

export default function DropdownItem<T>({
  value,
  label,
  selected,
  onItemSelected,
}: DropdownItemProps<T>) {
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onItemSelected(value, label);
    },
    [onItemSelected, value, label],
  );

  return (
    <button
      onClick={onClick}
      autoFocus={selected}
      className={`body text-left rounded-lg p-2 h-8 w-full bg-white capitalize
        text-secondary enabled:hover:text-black focus:text-black focus:bg-hovered`}
    >
      {label}
    </button>
  );
}
