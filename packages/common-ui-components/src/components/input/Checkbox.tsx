"use client";

import { useCallback } from "react";
import type { ChangeEvent } from "react";

import CheckMiniIcon from "@sellify/common-icons/check-mini";

type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  value: string;
  readOnly?: boolean;
  onChange: (isChecked: boolean, value: string) => void;
};

/**
 * Renders a checkbox with a custom checked indicator.
 *
 * @param checked - Whether the checkbox is checked
 * @param disabled - Whether the checkbox is disabled
 * @param value - Value assigned to the checkbox and used in its identifier
 * @param readOnly - Whether the checkbox is read-only
 * @param onChange - Callback invoked with the checked state and value
 */
export default function Checkbox({
  checked,
  disabled,
  value,
  readOnly,
  onChange,
}: CheckboxProps) {
  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      onChange(e.target.checked, e.target.value);
    },
    [onChange],
  );

  return (
    <label className="relative flex items-center">
      <input
        type="checkbox"
        value={value}
        disabled={disabled}
        onChange={changeHandler}
        checked={checked}
        readOnly={readOnly}
        id={`checkbox-${value}`}
        className="peer size-5 appearance-none rounded-md border border-stroke bg-white group-hover:border-black
            enabled:hover:border-black focus:border-black checked:bg-black checked:border-black checked:disabled:bg-disabled
            enabled:checked:border-black enabled:cursor-pointer disabled:cursor-not-allowed disabled:border-disabled"
      />
      <span
        className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2 pointer-events-none *:size-3"
      >
        <CheckMiniIcon />
      </span>
    </label>
  );
}
