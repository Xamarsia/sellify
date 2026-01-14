import { ChangeEvent, useCallback } from "react";
import { RangeFilterPropertyValue } from "./common/PropertyValues";

type FilterParameterProps = {
  propertyKey: string;
  value: RangeFilterPropertyValue;
  min: number;
  max: number;
  onFilterPropertyChange: (
    propertyKey: string,
    value: RangeFilterPropertyValue,
  ) => void;
};

export default function RangeFilterPropertyView({
  propertyKey,
  value,
  min,
  max,
  onFilterPropertyChange,
}: FilterParameterProps) {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      onFilterPropertyChange(propertyKey, new RangeFilterPropertyValue(15));
    },
    [propertyKey],
  );

  return (
    <div className="flex gap-1">
      <label className="label text-placeholder self-end">{`(${min})`}</label>
      <label>{value.value}</label>
      <label className="label text-placeholder self-end">{`(${max})`}</label>
    </div>
  );
}
