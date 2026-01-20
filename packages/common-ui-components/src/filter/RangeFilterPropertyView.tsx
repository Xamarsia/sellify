import { useCallback } from "react";
import { RangeFilterPropertyValue } from "./common/PropertyValues";
import RangeSlider from "../range-slider/RangeSlider";

type FilterParameterProps = {
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
}: FilterParameterProps) {
  const onMinValueChange = useCallback(
    (min: number): void => {
      onFilterPropertyChange(
        propertyKey,
        new RangeFilterPropertyValue({
          min: min,
          max: selectedRange.value.max,
        }),
      );
    },
    [selectedRange],
  );

  const onMaxValueChange = useCallback(
    (max: number): void => {
      onFilterPropertyChange(
        propertyKey,
        new RangeFilterPropertyValue({
          min: selectedRange.value.min,
          max: max,
        }),
      );
    },
    [selectedRange],
  );

  return (
    <RangeSlider
      range={fullRange.value}
      currentRange={selectedRange.value}
      onMinValueChange={onMinValueChange}
      onMaxValueChange={onMaxValueChange}
    />
  );
}
