import { ChangeEvent, useCallback } from "react";

import Checkbox from "@sellify/common-ui-components/input/Checkbox";
import { CheckboxFilterPropertyValue } from "./common/PropertyValues";

type CheckboxFilterPropertyViewProps = {
  propertyKey: string;
  selectedValue: CheckboxFilterPropertyValue;
  onFilterPropertyChange: (
    propertyKey: string,
    selectedValue: CheckboxFilterPropertyValue,
  ) => void;
};

export default function CheckboxFilterPropertyView({
  propertyKey,
  selectedValue,
  onFilterPropertyChange,
}: CheckboxFilterPropertyViewProps) {
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
        checked={selectedValue.value}
        onChange={onChange}
        value={propertyKey}
        label={propertyKey}
      />
    </div>
  );
}
