import { useCallback, useEffect } from "react";

import { MultiSelectionComboboxFilterPropertyValue } from "./common/PropertyValues";
import MultiSelectionCombobox from "../combobox/MultiSelectionCombobox";

type FilterParameterProps<T> = {
  propertyKey: string;
  items: MultiSelectionComboboxFilterPropertyValue<T>;
  selectedItems: MultiSelectionComboboxFilterPropertyValue<T>;
  initialSelectedKeys?: T[];
  onFilterPropertyChange: (
    propertyKey: string,
    value: MultiSelectionComboboxFilterPropertyValue<T>,
  ) => void;
};

export default function MultiSelectionComboboxFilterPropertyView<
  T extends string | number,
>({
  propertyKey,
  items,
  selectedItems,
  initialSelectedKeys,
  onFilterPropertyChange,
}: FilterParameterProps<T>) {
  const onItemSelected = useCallback(
    (key: T, value: string) => {
      const newSelectedItemsMap = new Map([
        ...selectedItems.value,
        [key, value],
      ]);
      onFilterPropertyChange(
        propertyKey,
        new MultiSelectionComboboxFilterPropertyValue(newSelectedItemsMap),
      );
    },
    [propertyKey, onFilterPropertyChange],
  );

  const onItemRemoved = useCallback(
    (key: T, value: string) => {
      const newSelectedItemsMap = new Map([...selectedItems.value]);
      newSelectedItemsMap.delete(key);
      onFilterPropertyChange(
        propertyKey,
        new MultiSelectionComboboxFilterPropertyValue(newSelectedItemsMap),
      );
    },
    [propertyKey, onFilterPropertyChange],
  );

  useEffect(() => {
    if (!initialSelectedKeys) {
      return;
    }

    const newSelectedItems = new Map();
    initialSelectedKeys.map((key) => {
      const value: string | undefined = items.value.get(key);
      if (value) {
        newSelectedItems.set(key, value);
      }
    });
    onFilterPropertyChange(
      propertyKey,
      new MultiSelectionComboboxFilterPropertyValue(newSelectedItems),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Runs only on the first render

  return (
    <MultiSelectionCombobox<T>
      items={items.value}
      selectedItems={selectedItems.value}
      onItemSelected={onItemSelected}
      onItemRemoved={onItemRemoved}
    />
  );
}
