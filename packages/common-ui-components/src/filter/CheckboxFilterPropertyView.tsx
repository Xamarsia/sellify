import { useCallback } from "react";

import LabeledCheckbox from "../form/LabeledCheckbox";
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
    (isChecked: boolean): void => {
      onFilterPropertyChange(
        propertyKey,
        new CheckboxFilterPropertyValue(isChecked),
      );
    },
    [propertyKey, onFilterPropertyChange],
  );

  return (
    <div className="flex gap-1">
      <LabeledCheckbox
        checked={selectedValue.value}
        onChange={onChange}
        value={propertyKey}
        label={propertyKey}
      />
    </div>
  );
}
