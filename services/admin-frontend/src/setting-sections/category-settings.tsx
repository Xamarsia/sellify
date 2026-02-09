"use client";

import SettingsSection from "@sellify/admin-ui-components/SettingsSection";

export default function CategorySettings() {
  return (
    <>
      <SettingsSection
        title="Delete Category"
        description="Permanently delete your category and all associated data. This action cannot be undone"
        buttonText="Delete"
        type="destructive"
      />
    </>
  );
}
