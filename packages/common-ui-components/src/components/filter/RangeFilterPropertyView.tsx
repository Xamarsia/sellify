import { RangeFilterPropertyValue } from "./common/PropertyValues";
import RangeSlider from "../range-slider/RangeSlider";
import type { SliderRange } from "../range-slider/types";

type RangeFilterPropertyViewProps = {
  propertyKey: string;
  selectedRange: RangeFilterPropertyValue;
  fullRange: RangeFilterPropertyValue;
  onFilterPropertyChange: (
    propertyKey: string,
    selectedRange: RangeFilterPropertyValue,
  ) => void;
};

export default function RangeFilterPropertyView({
  propertyKey,
  selectedRange,
  fullRange,
  onFilterPropertyChange,
}: RangeFilterPropertyViewProps) {
  const onCurrentRangeChange = (currentRange: SliderRange): void => {
    onFilterPropertyChange(
      propertyKey,
      new RangeFilterPropertyValue(currentRange),
    );
  };

  return (
    <RangeSlider
      range={fullRange.value}
      currentRange={selectedRange.value}
      onCurrentRangeChange={onCurrentRangeChange}
    />
  );
}
