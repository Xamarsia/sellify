import { ChangeEvent, useCallback, useState } from "react";

import Checkbox from "@sellify/common-ui-components/input/Checkbox";

import { FilterProperty } from "../types";

type FilterParameterProps = {
  filterProperty: FilterProperty;
  onFilterPropertyChange: (key: string, selected: boolean) => void;
};

export default function FilterPropertyComponent({
  filterProperty,
  onFilterPropertyChange
}: FilterParameterProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(e.target.checked);
    onFilterPropertyChange(filterProperty.key, e.target.checked);
  }, [filterProperty, onFilterPropertyChange]);

  return (
    <div className="flex gap-1">
      <Checkbox
        checked={isChecked}
        onChange={onChange}
        value={filterProperty.key}
        label={filterProperty.value} />
      <label className="label text-placeholder self-end">{`(${filterProperty.amount})`}</label>
    </div>
  );
}
