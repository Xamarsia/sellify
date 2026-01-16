import { useCallback } from "react";
import { RangeFilterPropertyValue } from "./common/PropertyValues";
import RangeSlider from "../range-slider/RangeSlider";

type FilterParameterProps = {
  propertyKey: string;
  value: RangeFilterPropertyValue;
  range: RangeFilterPropertyValue;
  onFilterPropertyChange: (
    propertyKey: string,
    value: RangeFilterPropertyValue,
  ) => void;
};

export default function RangeFilterPropertyView({
  propertyKey,
  value,
  range,
  onFilterPropertyChange,
}: FilterParameterProps) {
  const onMinValueChange = useCallback(
    (min: number): void => {
      onFilterPropertyChange(
        propertyKey,
        new RangeFilterPropertyValue({ min: min, max: value.value.max }),
      );
    },
    [value],
  );

  const onMaxValueChange = useCallback(
    (max: number): void => {
      onFilterPropertyChange(
        propertyKey,
        new RangeFilterPropertyValue({ min: value.value.min, max: max }),
      );
    },
    [value],
  );

  return (
    <RangeSlider
      range={range.value}
      currentRange={value.value}
      onMinValueChange={onMinValueChange}
      onMaxValueChange={onMaxValueChange}
    />
  );
}
