"use client";

import InfoSection from "@sellify/admin-ui-components/InfoSection";
import SettingsSection from "@sellify/admin-ui-components/SettingsSection";

export default function AdminSettings() {
  return (
    <>
      <SettingsSection
        title="Change Role"
        description="Update admin role."
        buttonText="Update"
      />

      <InfoSection title="Danger Zone">
        <SettingsSection
          title="Archive Admin"
          description=" Move selected admin data to inactive status."
          buttonText="Archive"
          type="destructive"
        />
      </InfoSection>
    </>
  );
}
