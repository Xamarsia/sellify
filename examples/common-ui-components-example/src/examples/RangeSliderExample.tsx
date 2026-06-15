import RangeSlider, {
  SliderRange,
} from "@sellify/common-ui-components/range-slider/RangeSlider";
import { useCallback, useState } from "react";

type RangeSliderExampleProps = {
  range: SliderRange;
};

export default function RangeSliderExample({ range }: RangeSliderExampleProps) {
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
