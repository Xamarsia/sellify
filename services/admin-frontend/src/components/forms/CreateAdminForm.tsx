"use client";

import { useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import ComboboxFormItem from "@sellify/common-ui-components/form/ComboboxFormItem";
import InputFormItem from "@sellify/common-ui-components/form/InputFormItem";

import { CreateAdminRequest } from "types";
import { createAdmin } from "actions/admins-actions";
import { getRolePreviewsComboboxItems } from "actions/roles-actions";

export default function CreateAdminForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>();
  const roles: Map<number, string> = getRolePreviewsComboboxItems();

  const onFormSubmit = useCallback((): void => {
    const createAdminRequest: CreateAdminRequest = {
      name: `${firstName} ${lastName}`,
      email: email,
      role: role,
    };
    createAdmin(createAdminRequest);
  }, [firstName, lastName, email, role]);

  const onRoleSelected = useCallback(
    (key?: number, newValue?: string) => {
      setRole(newValue ? newValue : "");
    },
    [setRole],
  );

  return (
    <form
      className="grow flex flex-col gap-13 justify-between"
      onSubmit={onFormSubmit}
    >
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <InputFormItem
            label="First Name"
            value={firstName}
            placeholder="First Name"
            required
            onChange={setFirstName}
          />
          <InputFormItem
            label="Last Name"
            value={lastName}
            placeholder="Last Name"
            required
            onChange={setLastName}
          />
        </div>
        <InputFormItem
          label="Email"
          type="email"
          value={email}
          placeholder="axample@domain.com"
          required
          onChange={setEmail}
        />
        <ComboboxFormItem
          label="Role"
          items={roles}
          value={role}
          required
          onItemSelected={onRoleSelected}
        />
      </div>
      <div className="sm:w-xs">
        <Button type="submit">Invite New Admin</Button>
      </div>
    </form>
  );
}
