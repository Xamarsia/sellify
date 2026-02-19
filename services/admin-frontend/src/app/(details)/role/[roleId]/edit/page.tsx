import "server-only";

import { Role } from "@sellify/admin-ui-components/types";

import { getRoleById } from "actions/roles-actions";
import EditRoleForm from "components/forms/EditRoleForm";

type Props = {
  params: Promise<{ roleId: number }>;
};

export default async function EditRolePage({ params }: Props) {
  const roleId: number = (await params).roleId;
  const role: Role = getRoleById(roleId);

  return (
    <>
      <h1 className="py-4">{`Edit Role: ${role.title}`}</h1>
      <EditRoleForm role={role} />
    </>
  );
}
