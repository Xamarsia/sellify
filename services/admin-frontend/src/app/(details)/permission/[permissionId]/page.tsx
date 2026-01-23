import "server-only";

import { Permission, RolePreview } from "@sellify/admin-ui-components/types";

import {
  getPermissionById,
  getRolePreviewsByPermissionId,
} from "actions/permissions-actions";
import PermissionDetailsPage from "components/pages/PermissionDetailsPage";

type Props = {
  params: Promise<{ permissionId: number }>;
};

export default async function PermissionPage({ params }: Props) {
  const permissionId: number = (await params).permissionId;
  const permission: Permission = getPermissionById(permissionId);
  const relatedRoles: Array<RolePreview> =
    getRolePreviewsByPermissionId(permissionId);

  return (
    <PermissionDetailsPage
      permission={permission}
      relatedRoles={relatedRoles}
    />
  );
}
