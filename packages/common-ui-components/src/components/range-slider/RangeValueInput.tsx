import { useCallback, useEffect, useState } from "react";
import type { FocusEvent, FormEvent } from "react";

import Input from "../input/Input";

const EDITABLE_NUMBER_PATTERN = /^\d*$/;

/**
 * Props for a bounded integer input.
 */
type RangeValueInputProps = {
  /** Minimum allowed value. */
  min: number;

  /** Maximum allowed value. */
  max: number;

  /** Current committed value. */
  value: number;

  /** Called with the validated value. */
  onCommit: (value: number) => void;
};

/**
 * Restricts a value to the inclusive range.
 *
 * @param value - Value to restrict
 * @param min - Minimum allowed value
 * @param max - Maximum allowed value
 * @returns The restricted value
 */
function clampValue(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Renders an integer input that commits on blur or form submission.
 *
 * Only digits are accepted. Committed values are restricted to the allowed
 * range, and an empty draft restores the current value.
 *
 * @param min - Minimum allowed value
 * @param max - Maximum allowed value
 * @param value - Current committed value
 * @param onCommit - Called with the validated value
 */
export default function RangeValueInput({
  min,
  max,
  value,
  onCommit,
}: RangeValueInputProps) {
  const [draftValue, setDraftValue] = useState(value.toString());

  useEffect(() => {
    setDraftValue(value.toString());
  }, [value]);

  const updateDraftValue = useCallback((nextValue: string): void => {
    if (EDITABLE_NUMBER_PATTERN.test(nextValue)) {
      setDraftValue(nextValue);
    }
  }, []);

  const commitDraftValue = useCallback((): void => {
    const parsedValue = Number(draftValue);
    const committedValue =
      draftValue === "" || !Number.isFinite(parsedValue)
        ? clampValue(value, min, max)
        : clampValue(parsedValue, min, max);

    setDraftValue(committedValue.toString());
    onCommit(committedValue);
  }, [draftValue, max, min, onCommit, value]);

  const handleFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      commitDraftValue();
    },
    [commitDraftValue],
  );

  const handleFormBlur = useCallback(
    (event: FocusEvent<HTMLFormElement>): void => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        commitDraftValue();
      }
    },
    [commitDraftValue],
  );

  return (
    <form
      className="w-full"
      onBlur={handleFormBlur}
      onSubmit={handleFormSubmit}
    >
      <Input required value={draftValue} onChange={updateDraftValue} />
    </form>
  );
}
