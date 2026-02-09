import "server-only";

import CreateAdminForm from "components/forms/CreateAdminForm";

export default function CreateAdminPage() {
  return (
    <>
      <h1 className="py-4">{`Create Admin`}</h1>
      <CreateAdminForm />
    </>
  );
}
