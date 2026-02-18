"use client";

import { useCallback } from "react";

import XMarkIcon from "@sellify/common-icons/x-mark";
import { Size } from "@sellify/common-icons/enums";

import TransparentIconButton from "../buttons/TransparentIconButton";

type ComboboxItemProps<T> = {
  value: T;
  label: string;
  disabled?: boolean;
  onRemove?: (value: T, labe: string) => void;
};

export default function ComboboxItem<T>({
  value,
  label,
  disabled,
  onRemove,
}: ComboboxItemProps<T>) {
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (onRemove) {
        onRemove(value, label);
      }
    },
    [value, label, onRemove],
  );

  return (
    <div className="flex justify-center items-center bg-combobox-item rounded-lg px-4 h-8 gap-2">
      <span className={`label text-left text-secondary line-clamp-1 break-all`}>
        {label}
      </span>
      {!disabled && (
        <TransparentIconButton onClick={onClick}>
          <XMarkIcon size={Size.sm} />
        </TransparentIconButton>
      )}
    </div>
  );
}
