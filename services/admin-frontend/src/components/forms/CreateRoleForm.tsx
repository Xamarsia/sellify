"use client";

import { useCallback, useState } from "react";

import InputFormItem from "@sellify/common-ui-components/form/InputFormItem";
import Button from "@sellify/common-ui-components/buttons/Button";

import PermissionsMultiSelectionCombobox from "@sellify/admin-ui-components/PermissionsMultiSelectionCombobox";

import { createRole } from "actions/roles-actions";
import { CreateRoleRequest } from "types";

export default function CreateRoleForm() {
  const [title, setTitle] = useState<string>("");
  const [selectedPermissions, setSelectedPermissions] = useState<
    Map<number, string>
  >(new Map());

  const onFormSubmit = useCallback((): void => {
    const createRoleRequest: CreateRoleRequest = {
      title: title,
      permissions: [...selectedPermissions.keys()],
    };

    createRole(createRoleRequest);
  }, [title, selectedPermissions]);

  return (
    <form
      className="grow flex flex-col gap-13 justify-between"
      onSubmit={onFormSubmit}
    >
      <div className="flex flex-col gap-6">
        <InputFormItem
          label="Title"
          value={title}
          placeholder="Title"
          required
          onChange={setTitle}
        />
        <PermissionsMultiSelectionCombobox
          required
          selectedPermissions={selectedPermissions}
          onSelectedPermissionsChanged={setSelectedPermissions}
        />
      </div>

      <div className="sm:w-xs">
        <Button type="submit">Create Role</Button>
      </div>
    </form>
  );
}
