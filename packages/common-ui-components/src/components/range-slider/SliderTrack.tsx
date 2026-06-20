import type { SliderRange } from "./types";

/**
 * Restricts a percentage to the slider track.
 *
 * @param value - Percentage to restrict
 * @returns A percentage from 0 to 100
 */
function clampPercentage(value: number): number {
  const min = 0;
  const max = 100;

  return Math.min(Math.max(value, min), max);
}

/**
 * Converts a slider value to a track percentage.
 *
 * @param value - Slider value
 * @param range - Allowed slider range
 * @returns The value's position from 0 to 100
 */
function getValuePercentage(value: number, range: SliderRange): number {
  const rangeSize = range.max - range.min;

  if (rangeSize === 0) {
    return 0;
  }

  return clampPercentage(((value - range.min) / rangeSize) * 100);
}

/**
 * Props for a dual-thumb slider track.
 */
type SliderTrackProps = {
  /** Allowed slider range. */
  range: SliderRange;

  /** Current thumb values. */
  currentRange: SliderRange;
};

/**
 * Renders a track with the area between both thumbs highlighted.
 *
 * @param range - Allowed slider range
 * @param currentRange - Current thumb values
 */
export default function SliderTrack({ range, currentRange }: SliderTrackProps) {
  const minThumbPosition = getValuePercentage(currentRange.min, range);
  const maxThumbPosition = getValuePercentage(currentRange.max, range);
  const selectionStart = Math.min(minThumbPosition, maxThumbPosition);
  const selectionWidth = Math.abs(maxThumbPosition - minThumbPosition);

  return (
    <div className="relative">
      <div className="absolute rounded-sm h-[6px] w-full z-1 bg-stroke" />
      <div
        data-testid="selected-range"
        className="absolute rounded-sm h-[6px] z-2 bg-primary-hover"
        style={{
          left: `${selectionStart}%`,
          width: `${selectionWidth}%`,
        }}
      />
    </div>
  );
}
