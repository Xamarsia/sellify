import { ChangeEvent, useCallback } from "react";

import Checkbox from "@sellify/common-ui-components/input/Checkbox";
import { CheckboxFilterPropertyValue } from "./common/PropertyValues";

type FilterParameterProps = {
  propertyKey: string;
  value: CheckboxFilterPropertyValue;
  onFilterPropertyChange: (
    propertyKey: string,
    value: CheckboxFilterPropertyValue,
  ) => void;
};

export default function CheckboxFilterPropertyView({
  propertyKey,
  value,
  onFilterPropertyChange,
}: FilterParameterProps) {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      onFilterPropertyChange(
        propertyKey,
        new CheckboxFilterPropertyValue(e.target.checked),
      );
    },
    [propertyKey, onFilterPropertyChange],
  );

  return (
    <div className="flex gap-1">
      <Checkbox
        checked={value.value}
        onChange={onChange}
        value={propertyKey}
        label={propertyKey}
      />
    </div>
  );
}
