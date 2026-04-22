"use client";

import { ChangeEvent, useCallback } from "react";

import CheckMiniIcon from "@sellify/common-icons/check-mini";

type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  value: string;
  readOnly?: boolean;
  onChange: (isChecked: boolean) => void;
};

export default function Checkbox({
  checked,
  disabled,
  value,
  readOnly,
  onChange,
}: CheckboxProps) {
  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      onChange(e.target.checked);
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
