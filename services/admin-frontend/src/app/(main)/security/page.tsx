"use client";

import Button from "@sellify/common-ui-components/buttons/Button";
import PageTitle from "components/PageTitle";
import SettingsSection from "@sellify/admin-ui-components/SettingsSection";

export default function SettingsPage() {
  return (
    <>
      <PageTitle />
      <SettingsSection title="Password" description="Reset password.">
        <Button fill="parent">Update</Button>
      </SettingsSection>

      <SettingsSection title="Email" description="Reset email.">
        <Button fill="parent">Update</Button>
      </SettingsSection>
    </>
  );
}
