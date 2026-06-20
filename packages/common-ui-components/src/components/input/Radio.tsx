"use client";

import { useCallback } from "react";
import type { ChangeEvent } from "react";

type RadioProps = {
  checked?: boolean;
  disabled?: boolean;
  value: string;
  readOnly?: boolean;
  onChange: (isChecked: boolean, value: string) => void;
};

/**
 * Renders a radio input with a custom selected indicator.
 *
 * @param checked - Whether the radio input is selected
 * @param disabled - Whether the radio input is disabled
 * @param value - Value assigned to the radio input and used in its identifier
 * @param readOnly - Whether the radio input is read-only
 * @param onChange - Callback invoked with the checked state and value
 */
export default function Radio({
  checked,
  disabled,
  value,
  readOnly,
  onChange,
}: RadioProps) {
  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      onChange(e.target.checked, e.target.value);
    },
    [onChange],
  );

  return (
    <label className="relative flex items-center">
      <input
        type="radio"
        value={value}
        disabled={disabled}
        onChange={changeHandler}
        checked={checked}
        readOnly={readOnly}
        id={`radio-${value}`}
        className="peer size-5 appearance-none rounded-full border border-stroke group-hover:border-black
            bg-white enabled:hover:border-black focus:border-black disabled:border-disabled
            enabled:checked:border-black enabled:cursor-pointer disabled:cursor-not-allowed"
      />
      <span
        className="absolute pointer-events-none bg-black peer-disabled:bg-disabled
            size-2.5 rounded-full opacity-0 peer-checked:opacity-100 top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2"
      />
    </label>
  );
}
