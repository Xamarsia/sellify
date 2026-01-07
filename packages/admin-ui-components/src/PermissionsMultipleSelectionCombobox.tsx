"use client";

import { useCallback, useEffect, useState } from "react";

import MultipleSelectionCombobox from "@sellify/common-ui-components/combobox/MultipleSelectionCombobox";

import { Permissions } from "@sellify/admin-ui-components/constants";

type Props = {
  required?: boolean;
  disabled?: boolean;
  defaultSelectedPermissions?: number[];
};

export default function PermissionsMultipleSelectionCombobox({
  required,
  disabled,
  defaultSelectedPermissions,
}: Props) {
  const items: Map<number, string> = new Map(Permissions);
  const [selectedItems, setSelectedItems] = useState<Map<number, string>>(
    new Map(),
  );
  const onItemSelected = useCallback(
    (key: number, value: string) => {
      const newSelectedItemsMap = new Map([...selectedItems, [key, value]]);
      setSelectedItems(newSelectedItemsMap);
    },
    [selectedItems],
  );

  const onItemRemoved = useCallback(
    (key: number, value: string) => {
      const newSelectedItemsMap = new Map([...selectedItems]);
      newSelectedItemsMap.delete(key);
      setSelectedItems(newSelectedItemsMap);
    },
    [selectedItems],
  );

  useEffect(() => {
    if (!defaultSelectedPermissions) {
      return;
    }

    const newSelectedItems = new Map();
    defaultSelectedPermissions.map((key) => {
      const value: string | undefined = items.get(key);
      if (value) {
        newSelectedItems.set(key, value);
      }
    });
    setSelectedItems(newSelectedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Runs only on the first render

  return (
    <MultipleSelectionCombobox
      title={"Permissions"}
      items={items}
      selectedItems={selectedItems}
      required={required}
      disabled={disabled}
      onItemSelected={onItemSelected}
      onItemRemoved={onItemRemoved}
    />
  );
}
