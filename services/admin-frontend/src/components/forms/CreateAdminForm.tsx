"use client";

import { ChangeEvent, useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import Combobox from "@sellify/common-ui-components/combobox/Combobox";
import FormItem from "@sellify/common-ui-components/FormItem";
import Input from "@sellify/common-ui-components/input/Input";

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
  }, [firstName, lastName, email, createAdmin]);

  const handleFirstNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value: string = e.target.value;
      setFirstName(value);
    },
    [setFirstName],
  );

  const handleLastNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value: string = e.target.value;
      setLastName(value);
    },
    [setLastName],
  );

  const handleEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value: string = e.target.value;
      setEmail(value);
    },
    [setEmail],
  );

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
          <FormItem title={"First Name"} required>
            <Input
              value={firstName}
              placeholder="First Name"
              required
              onChange={handleFirstNameChange}
            />
          </FormItem>

          <FormItem title={"Last Name"} required>
            <Input
              value={lastName}
              placeholder="Last Name"
              required
              onChange={handleLastNameChange}
            />
          </FormItem>
        </div>
        <FormItem title={"Email"} required>
          <Input
            type="email"
            value={email}
            placeholder="axample@domain.com"
            required
            onChange={handleEmailChange}
          />
        </FormItem>
        <FormItem title={"Role"} required>
          <Combobox
            items={roles}
            value={role}
            required
            onItemSelected={onRoleSelected}
          />
        </FormItem>
      </div>
      <Button type="submit">Invite New Admin</Button>
    </form>
  );
}
