import "server-only";

import Button from "@sellify/common-ui-components/buttons/Button";

import Card from "@sellify/admin-ui-components/card/Card";
import { AdminPreview, Role } from "@sellify/admin-ui-components/types";
import AdminsPreviewView from "@sellify/admin-ui-components/data-view/AdminsPreviewView";

import BackButton from "components/BackButton";
import {
  getAdminsPreviewsByRoleId,
  getRoleById,
} from "common/actions/roles-actions";
import PermissionsCombobox from "components/PermissionsCombobox";
import { Permissions } from "../../../../constants";

type Props = {
  params: Promise<{ roleId: number }>;
};

export default async function RoleDetailsPage({ params }: Props) {
  const roleId: number = (await params).roleId;
  const role: Role = getRoleById(roleId);
  const relatedAdmins: Array<AdminPreview> = getAdminsPreviewsByRoleId(roleId);

  function getPermissions(): Map<string, string> {
    return new Map(
      Permissions.map((permission) => {
        return [permission[0].toString(), permission[1]];
      }),
    );
  }

  return (
    <>
      <BackButton />
      <h1 className="py-4">{`Role: ${role.title}`}</h1>
      <Card label="Related Users" value="5" />

      <div className="flex flex-col w-full gap-6">
        <h2>{`Permissions List`}</h2>
        <PermissionsCombobox
          defaultSelectedPermissions={role.permissions.map((permission) =>
            permission.toString(),
          )}
          items={getPermissions()}
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
