"use client";

import { useRouter } from "next/navigation";

import InfoSection from "@sellify/admin-ui-components/InfoSection";
import SettingsSection from "@sellify/admin-ui-components/SettingsSection";

type Props = {
  roleId: number;
};

export default function RoleSettings({ roleId }: Props) {
  const router = useRouter();
  return (
    <>
      <SettingsSection
        title="Edit Role"
        description="Update title and permissions for the selected user role."
        buttonText="Edit"
        onClick={() => router.push(`/role/${roleId}/edit`)}
      />
      <InfoSection title="Danger Zone">
        <SettingsSection
          title="Delete Role"
          description="Permanently delete your role and all associated data. This action cannot be undone"
          buttonText="Delete"
          type="destructive"
        />
      </InfoSection>
    </>
  );
}
