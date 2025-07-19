"use client";

import { ChangeEvent, useCallback, useEffect, useState } from "react";

type AddAmountButtonProps = {
  disabled?: boolean;
  value?: number;
  onChange: (value?: number) => void;
  onSubmit: (value: number) => void;
};

export default function AddAmountButton({
  disabled,
  value,
  onChange,
  onSubmit,
}: AddAmountButtonProps) {
  const [quantity, setQuantity] = useState<string>("");

  useEffect(() => {
    if (value !== undefined) {
      setQuantity(value.toString());
    }
  }, [value]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const possibleNumber: string = e.target.value;

      if (possibleNumber == "-" || possibleNumber == "") {
        onChange(undefined);
        setQuantity(possibleNumber);
        return;
      }
      const numberRegex = /^-?[\d]+$/;

      if (numberRegex.test(possibleNumber)) {
        console.log("Here: ", possibleNumber);
        onChange(parseInt(possibleNumber));
      }
    },
    [onChange],
  );

  const onUnfocused = useCallback((): void => {
    if (value !== undefined) {
      setQuantity(value.toString());
    } else {
      setQuantity("");
    }
  }, [value]);

  const onQuantitySubmit = useCallback((): void => {
    if (value !== undefined) {
      onSubmit(value);
    }
  }, [onSubmit, value]);

  return (
    <div
      className={`group flex justify-evenly w-44 h-11 has-enabled:hover:border-black has-focus:border-black 
            ${value !== undefined && !disabled && "not-disabled:border-black"}  rounded-lg border border-stroke`}
    >
      <input
        type="text"
        name="quantity"
        inputMode="numeric"
        disabled={disabled}
        value={quantity}
        onBlur={onUnfocused}
        onChange={handleChange}
        maxLength={15} // should be always less than max number length
        required
        className={`peer w-24 h-full text-center rounded-l-md outline-none accent-transparent disabled:text-disabled p-2`}
      />

      <button
        type="button"
        onClick={onQuantitySubmit}
        disabled={disabled || value === undefined}
        className={`
                    ${disabled ? "text-disabled" : "group-has-hover:border-black peer-focus:border-black "} 
                    ${value !== undefined && !disabled && "bg-[#383838] text-white border-black enabled:hover:bg-black"} 
                    enabled:cursor-pointer disabled:cursor-not-allowed flex-1 border-l rounded-r-md border-stroke 
                `}
      >
        Add
      </button>
    </div>
  );
}
