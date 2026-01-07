import "server-only";

import Button from "@sellify/common-ui-components/buttons/Button";

import Card from "@sellify/admin-ui-components/card/Card";
import { AdminPreview, Role } from "@sellify/admin-ui-components/types";
import AdminsPreviewView from "@sellify/admin-ui-components/data-view/AdminsPreviewView";
import PermissionsMultipleSelectionCombobox from "@sellify/admin-ui-components/PermissionsMultipleSelectionCombobox";

import BackButton from "components/BackButton";
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
      <BackButton />
      <h1 className="py-4">{`Role: ${role.title}`}</h1>
      <Card label="Related Users" value="5" />

      <div className="flex flex-col w-full gap-6">
        <h2>{`Permissions List`}</h2>
        <PermissionsMultipleSelectionCombobox
          defaultSelectedPermissions={role.permissions}
        />
      </div>

      <div className="flex flex-col w-full gap-6">
        <h2>{`Related Users`}</h2>
        <AdminsPreviewView content={relatedAdmins} />
      </div>

      <div className="flex w-full justify-between">
        <Button variant="destructive">Remove Role</Button>
        <Button>Edit Role</Button>
      </div>
    </>
  );
}
