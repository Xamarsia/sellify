import "server-only";

import Button from "@sellify/common-ui-components/buttons/Button";

import Card from "@sellify/admin-ui-components/card/Card";
import InfoSection from "@sellify/admin-ui-components/InfoSection";
import { AdminPreview, Role } from "@sellify/admin-ui-components/types";
import AdminsPreviewView from "@sellify/admin-ui-components/data-view/AdminsPreviewView";
import PermissionsMultiSelectionCombobox from "@sellify/admin-ui-components/PermissionsMultiSelectionCombobox";

import {
  getAdminsPreviewsByRoleId,
  getRoleById,
} from "common/actions/roles-actions";

type Props = {
  params: Promise<{ roleId: number }>;
};

export default async function RoleDetailsPage({ params }: Props) {
  const roleId: number = (await params).roleId;
  const role: Role = getRoleById(roleId);
  const relatedAdmins: Array<AdminPreview> = getAdminsPreviewsByRoleId(roleId);

  return (
    <>
      <h1 className="py-4">{`Role: ${role.title}`}</h1>
      <Card label="Related Users" value="5" />

      <InfoSection title="Permissions List">
        <PermissionsMultiSelectionCombobox
          defaultSelectedPermissions={role.permissions}
        />
      </InfoSection>

      <InfoSection title="Related Users">
        <AdminsPreviewView content={relatedAdmins} />
      </InfoSection>

      <div className="flex w-full justify-between">
        <Button variant="destructive">Remove Role</Button>
        <Button>Edit Role</Button>
      </div>
    </>
  );
}
