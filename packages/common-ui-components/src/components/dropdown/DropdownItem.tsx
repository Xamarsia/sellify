"use client";

import { useCallback } from "react";

type DropdownItemProps<T> = {
  value: T;
  label: string;
  selected?: boolean;
  onItemSelected: (value: T, label: string) => void;
};

/**
 * Renders a selectable item inside a dropdown menu.
 *
 * Selected items receive focus when rendered. Clicking the item returns both
 * its value and display label.
 *
 * @typeParam T - Type of the value represented by the item
 * @param value - Value returned when the item is selected
 * @param label - Text displayed inside the item
 * @param selected - Whether the item receives focus when rendered
 * @param onItemSelected - Callback invoked with the item value and label
 */
export default function DropdownItem<T>({
  value,
  label,
  selected,
  onItemSelected,
}: DropdownItemProps<T>) {
  const onClick = useCallback(() => {
    onItemSelected(value, label);
  }, [onItemSelected, value, label]);

  return (
    <button
      onClick={onClick}
      autoFocus={selected}
      className={`body text-left rounded-lg p-2 h-8 w-full bg-white capitalize
        text-secondary enabled:hover:text-black focus:text-black focus:bg-hovered break-all`}
    >
      {label}
    </button>
  );
}
