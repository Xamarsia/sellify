import React, {
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import RangeSliderInput from "./RangeSliderInput";
import { SliderRange } from "../types";
import NumberInput from "./NumberInput";

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

  // Set range width to decrease from the left
  useEffect(() => {
    if (selectedRange.current) {
      selectedRange.current.style.left = `${minPercent}%`;
      selectedRange.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [currentRange.min]);

  // Set range width to decrease from the right
  useEffect(() => {
    if (selectedRange.current) {
      selectedRange.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [currentRange.max]);

  return (
    <>
      <div className="relative w-full flex items-center justify-center flex-col gap-6">
        <div className="w-full flex items-center justify-between gap-x-10">
          <NumberInput
            min={range.min}
            max={currentRange.max - 1}
            value={currentRange.min}
            title="From"
            onChange={onMinValueChange}
          />
          <NumberInput
            min={currentRange.min + 1}
            max={range.max}
            value={currentRange.max}
            title="To"
            onChange={onMaxValueChange}
          />
        </div>

        <div className="multi-slide-input-container w-full">
          <RangeSliderInput
            min={range.min}
            max={currentRange.max - 1}
            value={currentRange.min}
            onChange={onMinValueChange}
            style={currentRange.min > range.max - 100 ? "z-5" : "z-3"}
          />
          <RangeSliderInput
            min={currentRange.min + 1}
            max={range.max}
            value={currentRange.max}
            onChange={onMaxValueChange}
            style="z-4"
          />
          <div className="relative">
            <div className="absolute rounded-sm h-[6px] w-full z-1 bg-[#e1e1e1]" />
            <div
              ref={selectedRange}
              className="absolute rounded-sm h-[6px] z-2 bg-[#383838]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
