"use client";

import Input from "@sellify/common-ui-components/input/Input";
import Button from "@sellify/common-ui-components/buttons/Button";

import CountryCombobox from "components/CountryCombobox";

export default function ProfilePage() {
  return (
    <div className="flex w-full flex-col items-end gap-6">
      <Button variant="default" disabled>Edit Profile</Button>
      <div className="flex w-full flex-col md:flex-row gap-6">
        <div className="flex basis-1/2 flex-col gap-4 w-full">
          <Input title="First Name" required />
          <Input title="Phone Number" required />
          <CountryCombobox />
        </div>

        <div className="flex basis-1/2  flex-col gap-4">
          <Input title="Last Name" required />
          <Input title="Email Address" required />
          <Input title="Shipping Address" required />
        </div>
      </div>
    </div>
  );
}
