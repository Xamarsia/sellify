"use client";

import { useCallback } from "react";
import type { ChangeEvent } from "react";

type TextareaProps = {
  value?: string;
  disabled?: boolean;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
  state?: "invalid" | "valid";
  onChange: (newValue: string) => void;
};

/**
 * Renders a multi-line text input with validation styling.
 *
 * Invalid state styling is displayed after the user leaves a non-empty
 * textarea.
 *
 * @param value - Current textarea value
 * @param disabled - Whether the textarea is disabled
 * @param maxLength - Maximum number of characters accepted
 * @param placeholder - Placeholder text displayed while the textarea is empty
 * @param required - Whether the textarea is required
 * @param state - Validation state used to style the textarea
 * @param onChange - Callback invoked with the updated textarea value
 */
export default function Textarea({
  required,
  state,
  value,
  disabled,
  maxLength,
  placeholder,
  onChange,
}: TextareaProps) {
  const onValueChanged = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>): void => {
      e.preventDefault();
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <textarea
      value={value}
      required={required}
      onChange={onValueChanged}
      disabled={disabled}
      maxLength={maxLength}
      placeholder={placeholder}
      className={`resize-none h-40 p-4 border border-stroke placeholder-placeholder rounded-lg
          focus:outline-hidden disabled:text-disabled disabled:cursor-not-allowed
          body text-black bg-white enabled:hover:border-black focus:border-black
          ${state === "invalid" && "[&:not(:placeholder-shown):not(:focus)]:border-destructive"}`}
    />
  );
}
