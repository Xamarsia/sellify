import React, { useCallback, useState } from "react";

import RangeSlider from "./RangeSlider";
import { SliderRange } from "../types";

type Props = {
  range: SliderRange;
};

export default function PriceRangeSlider({ range }: Props) {
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
    <div className="w-full flex items-center justify-center flex-col gap-6">
      <div className="w-full flex items-center justify-between gap-x-5">
        <p> $ {currentRange.min} </p>
        <p> $ {currentRange.max} </p>
      </div>
      <RangeSlider
        range={range}
        currentRange={currentRange}
        onMinValueChange={onMinValueChange}
        onMaxValueChange={onMaxValueChange}
      />
    </div>
  );
}
