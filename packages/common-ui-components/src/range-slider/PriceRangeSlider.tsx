import React, { useCallback, useState } from "react";

import RangeSlider from "./RangeSlider";
import { SliderRange } from "../types";

type PriceRangeSliderProps = {
  range: SliderRange;
};

export default function PriceRangeSlider({ range }: PriceRangeSliderProps) {
  const [currentRange, setCurrentRange] = useState<SliderRange>(range);

  const onMinValueChange = useCallback(
    (value: number): void => {
      setCurrentRange({ min: value, max: currentRange.max });
    },
    [currentRange],
  );

  const onMaxValueChange = useCallback(
    (value: number): void => {
      setCurrentRange({ min: currentRange.min, max: value });
    },
    [currentRange],
  );

  return (
    <RangeSlider
      range={range}
      currentRange={currentRange}
      onMinValueChange={onMinValueChange}
      onMaxValueChange={onMaxValueChange}
    />
  );
}
