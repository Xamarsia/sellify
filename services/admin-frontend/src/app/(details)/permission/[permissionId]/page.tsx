import "server-only";

import Card from "@sellify/admin-ui-components/card/Card";
import { Permission, RolePreview } from "@sellify/admin-ui-components/types";
import RolesPreviewView from "@sellify/admin-ui-components/data-view/RolesPreviewView";
import InfoSection from "@sellify/admin-ui-components/InfoSection";

import {
  getPermissionById,
  getRolePreviewsByPermissionId,
} from "common/actions/permissions-actions";

type Props = {
  params: Promise<{ permissionId: number }>;
};

export default async function PermissionDetailsPage({ params }: Props) {
  const permissionId: number = (await params).permissionId;
  const permission: Permission = getPermissionById(permissionId);
  const relatedRoles: Array<RolePreview> =
    getRolePreviewsByPermissionId(permissionId);

  return (
    <>
      <h1 className="py-4">{`Permission: ${permission.title}`}</h1>
      <Card label="Related Roles" value={`${permission.relatedRolesCount}`} />
      <InfoSection title="Related Roles">
        <RolesPreviewView content={relatedRoles} />
      </InfoSection>
    </>
  );
}
