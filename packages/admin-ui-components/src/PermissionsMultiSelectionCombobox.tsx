"use client";

import { useCallback, useEffect } from "react";

import FormItem from "@sellify/common-ui-components/form/FormItem";
import MultiSelectionCombobox from "@sellify/common-ui-components/combobox/MultiSelectionCombobox";
import { Permission } from "./enums";

const PERMISSIONS: Readonly<Record<Permission, string>> = {
  [Permission.ARCHIVE_ADMIN]: "Archive Admin",
  [Permission.ARCHIVE_PRODUCT]: "Archive Product",
  [Permission.EDIT_ADMIN]: "Edit Admin",
  [Permission.EDIT_PRODUCT]: "Edit Product",
  [Permission.CREATE_ADMIN]: "Create Admin",
  [Permission.CREATE_PRODUCT]: "Create Product",
  [Permission.VIEW_ADMIN]: "View Admin",
  [Permission.VIEW_PRODUCT]: "View Product",
};

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
  const items = new Map<number, string>(
    Object.entries(PERMISSIONS).map(([key, value]) => [Number(key), value]),
  );

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

    const newSelectedItems = new Map<Permission, string>();
    defaultSelectedPermissions.forEach((key) => {
      const value = PERMISSIONS[key as Permission];
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
