"use client";

import { ChangeEvent, useCallback, useState } from "react";

import FormItem from "@sellify/common-ui-components/FormItem";
import Input from "@sellify/common-ui-components/input/Input";
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
  }, [title, selectedPermissions, createRole]);

  const handleTitleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value: string = e.target.value;
      setTitle(value);
    },
    [setTitle],
  );

  return (
    <form
      className="grow flex flex-col gap-13 justify-between"
      onSubmit={onFormSubmit}
    >
      <div className="flex flex-col gap-6">
        <FormItem title={"Title"} required>
          <Input
            value={title}
            placeholder="Title"
            required
            onChange={handleTitleChange}
          />
        </FormItem>
        <PermissionsMultiSelectionCombobox
          required
          selectedPermissions={selectedPermissions}
          onSelectedPermissionsChanged={setSelectedPermissions}
        />
      </div>

      <Button type="submit">Create Role</Button>
    </form>
  );
}
