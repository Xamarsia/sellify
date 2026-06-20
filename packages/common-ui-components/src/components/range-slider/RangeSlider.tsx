import DualThumbSlider from "./DualThumbSlider";
import RangeValueInputs from "./RangeValueInputs";
import type { SliderRange } from "./types";

/**
 * Props for a range slider with numeric inputs.
 */
type RangeSliderProps = {
  /** Allowed slider range. */
  range: SliderRange;

  /** Current slider values. */
  currentRange: SliderRange;

  /** Called with both values after either changes. */
  onCurrentRangeChange: (range: SliderRange) => void;
};

/**
 * Renders a dual-thumb range slider with editable numeric inputs.
 *
 * Thumbs may cross. Numeric inputs remain ordered from lower to higher.
 *
 * @param range - Allowed slider range
 * @param currentRange - Current slider values
 * @param onCurrentRangeChange - Called with both values after either changes
 */
export default function RangeSlider({
  range,
  currentRange,
  onCurrentRangeChange,
}: RangeSliderProps) {
  const updateMinValue = (value: number): void => {
    onCurrentRangeChange({
      min: value,
      max: currentRange.max,
    });
  };

  const updateMaxValue = (value: number): void => {
    onCurrentRangeChange({
      min: currentRange.min,
      max: value,
    });
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-6">
      <RangeValueInputs
        range={range}
        currentRange={currentRange}
        onMaxValueChange={updateMaxValue}
        onMinValueChange={updateMinValue}
      />

      <DualThumbSlider
        range={range}
        currentRange={currentRange}
        onMaxValueChange={updateMaxValue}
        onMinValueChange={updateMinValue}
      />
    </div>
  );
}
