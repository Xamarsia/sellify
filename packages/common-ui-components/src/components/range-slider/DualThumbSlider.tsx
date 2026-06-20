import { useCallback } from "react";

import SliderTrack from "./SliderTrack";
import SliderThumb from "./SliderThumb";
import type { RangeSliderControlsProps, SliderRange } from "./types";

const MINIMUM_THUMB_GAP = 1;

/**
 * Checks whether a value is within the slider range.
 *
 * @param value - Value to check
 * @param range - Allowed slider range
 * @returns Whether the value is allowed
 */
function isWithinRange(value: number, range: SliderRange): boolean {
  return value >= range.min && value <= range.max;
}

/**
 * Keeps the moved thumb at least one unit from the other thumb when possible.
 *
 * @param nextValue - Requested thumb value
 * @param currentValue - Current value of the moved thumb
 * @param otherValue - Value of the other thumb
 * @param range - Allowed slider range
 * @returns A separated thumb value within the range
 */
function getSeparatedThumbValue(
  nextValue: number,
  currentValue: number,
  otherValue: number,
  range: SliderRange,
): number {
  const availableRange = Math.max(0, range.max - range.min);
  const requiredGap = Math.min(MINIMUM_THUMB_GAP, availableRange);

  if (Math.abs(nextValue - otherValue) >= requiredGap) {
    return nextValue;
  }

  const crossingDirection = currentValue <= otherValue ? 1 : -1;
  const crossedValue = otherValue + crossingDirection * requiredGap;

  if (isWithinRange(crossedValue, range)) {
    return crossedValue;
  }

  return otherValue - crossingDirection * requiredGap;
}

/**
 * Renders a dual-thumb range slider with a highlighted selected track.
 *
 * Thumbs move independently and may cross while maintaining a gap when the
 * range permits it.
 *
 * @param range - Allowed slider range
 * @param currentRange - Current thumb values
 * @param onMaxValueChange - Called when the `max` thumb changes
 * @param onMinValueChange - Called when the `min` thumb changes
 */
export default function DualThumbSlider({
  range,
  currentRange,
  onMaxValueChange,
  onMinValueChange,
}: RangeSliderControlsProps) {
  const updateMinThumb = useCallback(
    (nextValue: number): void => {
      onMinValueChange(
        getSeparatedThumbValue(
          nextValue,
          currentRange.min,
          currentRange.max,
          range,
        ),
      );
    },
    [currentRange.max, currentRange.min, onMinValueChange, range],
  );

  const updateMaxThumb = useCallback(
    (nextValue: number): void => {
      onMaxValueChange(
        getSeparatedThumbValue(
          nextValue,
          currentRange.max,
          currentRange.min,
          range,
        ),
      );
    },
    [currentRange.max, currentRange.min, onMaxValueChange, range],
  );

  return (
    <div className="multi-slide-input-container w-full my-2.5">
      <SliderThumb
        label="Minimum value"
        range={range}
        value={currentRange.min}
        onChange={updateMinThumb}
      />
      <SliderThumb
        label="Maximum value"
        range={range}
        value={currentRange.max}
        onChange={updateMaxThumb}
      />
      <SliderTrack currentRange={currentRange} range={range} />
    </div>
  );
}
