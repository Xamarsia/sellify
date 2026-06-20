import RangeValueInput from "./RangeValueInput";
import type { RangeSliderControlsProps, SliderRange } from "./types";

const MINIMUM_VALUE_GAP = 1;

/**
 * Slider values sorted for display.
 */
type OrderedRange = {
  /** Lower slider value. */
  lower: number;

  /** Higher slider value. */
  upper: number;
};

/**
 * Sorts the slider values and keeps them at least one unit apart when possible.
 *
 * @param currentRange - Current slider values
 * @param range - Allowed slider range
 * @returns Values sorted from lower to higher
 */
function getOrderedRange(
  currentRange: SliderRange,
  range: SliderRange,
): OrderedRange {
  let lower = Math.min(currentRange.min, currentRange.max);
  let upper = Math.max(currentRange.min, currentRange.max);
  const availableRange = Math.max(0, range.max - range.min);
  const requiredGap = Math.min(MINIMUM_VALUE_GAP, availableRange);

  if (upper - lower >= requiredGap) {
    return { lower, upper };
  }

  if (lower + requiredGap <= range.max) {
    upper = lower + requiredGap;
  } else {
    lower = upper - requiredGap;
  }

  return { lower, upper };
}

/**
 * Renders the current slider values as lower and higher numeric inputs.
 *
 * If the slider thumbs cross, each input continues to update its corresponding
 * thumb value.
 *
 * @param range - Allowed slider range
 * @param currentRange - Current slider values
 * @param onMaxValueChange - Called when the `max` value changes
 * @param onMinValueChange - Called when the `min` value changes
 */
export default function RangeValueInputs({
  range,
  currentRange,
  onMaxValueChange,
  onMinValueChange,
}: RangeSliderControlsProps) {
  const isMinValueFirst = currentRange.min <= currentRange.max;
  const orderedRange = getOrderedRange(currentRange, range);
  const commitLowerValue = isMinValueFirst
    ? onMinValueChange
    : onMaxValueChange;
  const commitUpperValue = isMinValueFirst
    ? onMaxValueChange
    : onMinValueChange;

  return (
    <div className="w-full flex items-center justify-between gap-x-10">
      <RangeValueInput
        value={orderedRange.lower}
        min={range.min}
        max={range.max}
        onCommit={commitLowerValue}
      />
      <RangeValueInput
        value={orderedRange.upper}
        min={range.min}
        max={range.max}
        onCommit={commitUpperValue}
      />
    </div>
  );
}
