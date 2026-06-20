import { useCallback } from "react";
import type { ChangeEvent } from "react";

import type { SliderRange } from "./types";

/**
 * Props for one controlled slider thumb.
 */
type SliderThumbProps = {
  /** Allowed slider range. */
  range: SliderRange;

  /** Current thumb value. */
  value: number;

  /** Accessible thumb label. */
  label: string;

  /** Called when the thumb value changes. */
  onChange: (value: number) => void;
};

/**
 * Renders a controlled native range input as a slider thumb.
 *
 * @param range - Allowed slider range
 * @param value - Current thumb value
 * @param label - Accessible thumb label
 * @param onChange - Called when the thumb value changes
 */
export default function SliderThumb({
  range,
  value,
  label,
  onChange,
}: SliderThumbProps) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      onChange(Number(event.target.value));
    },
    [onChange],
  );

  return (
    <input
      type="range"
      min={range.min}
      max={range.max}
      value={value}
      aria-label={label}
      onChange={handleChange}
      className="thumb z-5 pointer-events-none absolute h-0 outline-none w-full cursor-pointer mt-[2px]"
    />
  );
}
