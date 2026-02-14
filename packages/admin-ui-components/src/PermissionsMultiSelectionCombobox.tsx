"use client";

import { useCallback, useEffect } from "react";

import FormItem from "@sellify/common-ui-components/FormItem";
import MultiSelectionCombobox from "@sellify/common-ui-components/combobox/MultiSelectionCombobox";

import { Permissions } from "@sellify/admin-ui-components/constants";

type PermissionsMultiSelectionComboboxProps = {
  required?: boolean;
  disabled?: boolean;
  selectedPermissions: Map<number, string>;
  onSelectedPermissionsChanged: (
    selectedPermissions: Map<number, string>,
  ) => void;
  defaultSelectedPermissions?: number[];
};

export default function PermissionsMultiSelectionCombobox({
  required,
  disabled,
  selectedPermissions,
  onSelectedPermissionsChanged,
  defaultSelectedPermissions,
}: PermissionsMultiSelectionComboboxProps) {
  const items: Map<number, string> = new Map(Permissions);

  const onItemSelected = useCallback(
    (key: number, value: string) => {
      const newSelectedItemsMap = new Map([
        ...selectedPermissions,
        [key, value],
      ]);
      onSelectedPermissionsChanged(newSelectedItemsMap);
    },
    [selectedPermissions, onSelectedPermissionsChanged],
  );

  const onItemRemoved = useCallback(
    (key: number, value: string) => {
      const newSelectedItemsMap = new Map([...selectedPermissions]);
      newSelectedItemsMap.delete(key);
      onSelectedPermissionsChanged(newSelectedItemsMap);
    },
    [selectedPermissions, onSelectedPermissionsChanged],
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
    onSelectedPermissionsChanged(newSelectedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Runs only on the first render

  return (
    <FormItem title={"Permissions"} required>
      <MultiSelectionCombobox
        items={items}
        selectedItems={selectedPermissions}
        required={required}
        disabled={disabled}
        onItemSelected={onItemSelected}
        onItemRemoved={onItemRemoved}
      />
    </FormItem>
  );
}
