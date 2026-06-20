import RangeSlider from "@sellify/common-ui-components/range-slider/RangeSlider";
import type { SliderRange } from "@sellify/common-ui-components/range-slider/types";
import { useState } from "react";

type RangeSliderExampleProps = {
  range: SliderRange;
};

export default function RangeSliderExample({ range }: RangeSliderExampleProps) {
  const [currentRange, setCurrentRange] = useState<SliderRange>(range);

  return (
    <RangeSlider
      range={range}
      currentRange={currentRange}
      onCurrentRangeChange={setCurrentRange}
    />
  );
}
