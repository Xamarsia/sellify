import "server-only";

import { Admin } from "@sellify/admin-ui-components/types";

import { getAdminById } from "actions/admins-actions";
import AdminSettings from "setting-sections/admin-settings";

type Props = {
  params: Promise<{ adminId: number }>;
};

export default async function AdminSettingsPage({ params }: Props) {
  const adminId: number = (await params).adminId;
  const admin: Admin = getAdminById(adminId);

  return (
    <>
      <h1 className="py-4">{`Admin: ${admin.name} #${admin.adminId} `}</h1>
      <AdminSettings />
    </>
  );
}
