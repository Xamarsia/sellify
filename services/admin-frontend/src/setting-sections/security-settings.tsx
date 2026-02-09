"use client";

import SettingsSection from "@sellify/admin-ui-components/SettingsSection";

export default function SecuritySettings() {
  return (
    <>
      <SettingsSection
        title="Password"
        description="Reset password"
        buttonText="Update"
      />
      <SettingsSection
        title="Email"
        description="Reset email"
        buttonText="Update"
      />
    </>
  );
}
