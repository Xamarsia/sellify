import React, {
  useCallback,
  useEffect,
  useRef,
  useMemo,
  ChangeEvent,
} from "react";
import RangeSliderInput from "./RangeSliderInput";
import { SliderRange } from "../types";

type Props = {
  range: SliderRange;
  currentRange: SliderRange;
  onMaxValueChange: (max: number) => void;
  onMinValueChange: (max: number) => void;
};

export default function RangeSlider({
  range,
  currentRange,
  onMaxValueChange,
  onMinValueChange,
}: Props) {
  const selectedRange = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number): number => {
      return Math.round(((value - range.min) / (range.max - range.min)) * 100);
    },
    [range],
  );

  const minPercent = useMemo<number>(() => {
    return getPercent(currentRange.min);
  }, [currentRange.min]);

  const maxPercent = useMemo<number>(() => {
    return getPercent(currentRange.max);
  }, [currentRange.max]);

  useEffect(() => {
    console.log("min: " + currentRange.min, "max: " + currentRange.max);
  }, [currentRange]);

  // set width of the range to decrease from the left side
  useEffect(() => {
    if (selectedRange.current) {
      selectedRange.current.style.left = `${minPercent}%`;
      selectedRange.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [currentRange.min]);

  // set the width of the range to decrease from right side
  useEffect(() => {
    if (selectedRange.current) {
      selectedRange.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [currentRange.max]);

  const handleMinValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const newMinValue: number = Math.min(
        Number(e.target.value),
        currentRange.max - 1,
      );
      onMinValueChange(newMinValue);
    },
    [currentRange.max],
  );

  const handleMaxValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const newMaxValue: number = Math.max(
        Number(e.target.value),
        currentRange.min + 1,
      );
      onMaxValueChange(newMaxValue);
    },
    [currentRange.min],
  );

  return (
    <>
      <div className="relative w-full flex items-center justify-center flex-col space-y-14">
        <div className="multi-slide-input-container w-full">
          <RangeSliderInput
            min={range.min}
            max={range.max}
            value={currentRange.min}
            onChange={handleMinValueChange}
            style={
              currentRange.min > range.max - 100 ||
              currentRange.min === currentRange.max
                ? "z-5"
                : "z-3"
            }
          />
          <RangeSliderInput
            min={range.min}
            max={range.max}
            value={currentRange.max}
            onChange={handleMaxValueChange}
            style="z-4"
          />
          <div className="relative">
            <div className="absolute rounded-sm h-[6px] w-full z-1 track-slider bg-[#cecece]" />
            <div
              ref={selectedRange}
              className="absolute rounded-sm h-[6px] z-2 range-slider bg-[#ff0303]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
