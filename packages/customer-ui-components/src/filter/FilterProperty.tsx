import { ChangeEvent, useCallback } from "react";

import Checkbox from "@sellify/common-ui-components/input/Checkbox";

import { FilterProperty } from "../types";

type FilterParameterProps = {
  propertyKey: string,
  value: boolean;
  // filterProperty: FilterProperty;
  onFilterPropertyChange: (propertyKey: string, selected: boolean) => void;
};

export default function FilterPropertyComponent({
  propertyKey,
  value,
  onFilterPropertyChange
}: FilterParameterProps) {

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    onFilterPropertyChange(propertyKey, e.target.checked);
  }, [propertyKey]);

  return (
    <div className="flex gap-1">
      <Checkbox
        checked={value}
        onChange={onChange}
        value={propertyKey}
        label={propertyKey} />
      {/* <label className="label text-placeholder self-end">{`(${filterProperty.amount})`}</label> */}
    </div>
  );
}
