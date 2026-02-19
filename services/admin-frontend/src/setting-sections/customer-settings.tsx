"use client";

import InfoSection from "@sellify/admin-ui-components/InfoSection";
import SettingsSection from "@sellify/admin-ui-components/SettingsSection";

export default function CustomerSettings() {
  return (
    <InfoSection title="Danger Zone">
      <SettingsSection
        title="Archive Customer"
        description="Move selected customer data to inactive status."
        buttonText="Archive"
        type="destructive"
      />
    </InfoSection>
  );
}
