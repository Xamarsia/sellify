import "server-only";

import CreateRoleForm from "components/forms/CreateRoleForm";

export default function CreateRolePage() {
  return (
    <>
      <h1 className="py-4">{`Create Role`}</h1>
      <CreateRoleForm />
    </>
  );
}
