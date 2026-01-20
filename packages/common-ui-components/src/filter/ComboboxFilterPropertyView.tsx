import { useCallback } from "react";
import { ComboboxFilterPropertyValue } from "./common/PropertyValues";
import Combobox from "../combobox/Combobox";

type FilterParameterProps = {
  propertyKey: string;
  items: Map<string, string>;
  value: ComboboxFilterPropertyValue;
  onFilterPropertyChange: (
    propertyKey: string,
    value: ComboboxFilterPropertyValue,
  ) => void;
};

export default function ComboboxFilterPropertyView({
  propertyKey,
  items,
  value,
  onFilterPropertyChange,
}: FilterParameterProps) {
  const onItemSelected = useCallback(
    (key?: string, newValue?: string) => {
      onFilterPropertyChange(
        propertyKey,
        new ComboboxFilterPropertyValue(newValue ? newValue : ""),
      );
    },
    [propertyKey, onFilterPropertyChange],
  );

  return (
    <Combobox
      items={items}
      title="Country"
      value={value.value}
      onItemSelected={onItemSelected}
    />
  );
}
