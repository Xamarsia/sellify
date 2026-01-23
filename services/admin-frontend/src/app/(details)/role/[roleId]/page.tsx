import "server-only";

import { AdminPreview, Role } from "@sellify/admin-ui-components/types";

import { getAdminsPreviewsByRoleId, getRoleById } from "actions/roles-actions";
import RoleDetailsPage from "components/pages/RoleDetailsPage";

type Props = {
  params: Promise<{ roleId: number }>;
};

export default async function RolePage({ params }: Props) {
  const roleId: number = (await params).roleId;
  const role: Role = getRoleById(roleId);
  const relatedAdmins: Array<AdminPreview> = getAdminsPreviewsByRoleId(roleId);

  return <RoleDetailsPage role={role} relatedAdmins={relatedAdmins} />;
}
