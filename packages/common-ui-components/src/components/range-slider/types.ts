/**
 * Defines the minimum and maximum values of a numeric range.
 */
export type SliderRange = {
  /** Lower boundary of the range. */
  min: number;

  /** Upper boundary of the range. */
  max: number;
};

/**
 * Shared props for controls that update slider values independently.
 */
export type RangeSliderControlsProps = {
  /** Allowed slider range. */
  range: SliderRange;

  /** Current slider values. */
  currentRange: SliderRange;

  /** Called when the `min` value changes. */
  onMinValueChange: (value: number) => void;

  /** Called when the `max` value changes. */
  onMaxValueChange: (value: number) => void;
};
