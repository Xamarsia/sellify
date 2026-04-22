"use client";

import { useCallback, useState } from "react";

import FormItem from "@sellify/common-ui-components/form/FormItem";
import Input from "@sellify/common-ui-components/input/Input";
import Button from "@sellify/common-ui-components/buttons/Button";

import { Role } from "@sellify/admin-ui-components/types";
import PermissionsMultiSelectionCombobox from "@sellify/admin-ui-components/PermissionsMultiSelectionCombobox";

import { editRole } from "actions/roles-actions";
import { EditRoleRequest } from "types";

type EditRoleFormProps = {
  role: Role;
};

export default function EditRoleForm({ role }: EditRoleFormProps) {
  const [title, setTitle] = useState<string>(role.title);
  const [selectedPermissions, setSelectedPermissions] = useState<
    Map<number, string>
  >(new Map());

  const onFormSubmit = useCallback((): void => {
    const editRoleRequest: EditRoleRequest = {
      roleId: role.roleId,
      title: title,
      permissions: [...selectedPermissions.keys()],
    };

    editRole(editRoleRequest);
  }, [role.roleId, title, selectedPermissions]);

  return (
    <form className="grow flex flex-col gap-14" onSubmit={onFormSubmit}>
      <div className="flex flex-col gap-6 w-full">
        <FormItem title={"Title"} required>
          <Input
            value={title}
            placeholder="Title"
            required
            onChange={setTitle}
          />
        </FormItem>
        <PermissionsMultiSelectionCombobox
          required
          selectedPermissions={selectedPermissions}
          onSelectedPermissionsChanged={setSelectedPermissions}
          defaultSelectedPermissions={role.permissions}
        />
      </div>
      <div className="sm:w-xs w-full">
        <Button type="submit">Edit Role</Button>
      </div>
    </form>
  );
}
