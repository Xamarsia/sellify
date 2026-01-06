import "server-only";

import FormSection from "@sellify/common-ui-components/FormSection";
import Button from "@sellify/common-ui-components/buttons/Button";

import { Admin } from "@sellify/admin-ui-components/types";
import AdminInfo from "@sellify/admin-ui-components/details/AdminInfo";

import BackButton from "components/BackButton";
import { getAdminById } from "common/actions/admins-actions";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";

type Props = {
  params: Promise<{ adminId: number }>;
};

export default async function AdminDetailsPage({ params }: Props) {
  const adminId: number = (await params).adminId;
  const admin: Admin = getAdminById(adminId);

  return (
    <>
      <BackButton />
      <h1 className="py-4">{`Admin: ${admin.name} #${admin.adminId} `}</h1>

      <div className="grow flex flex-col gap-12">
        <FormSection title="Admin Details">
          <AdminInfo admin={admin} />
        </FormSection>

        <FormSection title="Role">
          <div className="flex w-full justify-between">
            <LinkButton>
              <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
                {admin.role}
              </p>
            </LinkButton>
            <Button size="small">Change Role</Button>
          </div>
        </FormSection>
      </div>
      <Button variant="destructive">Disable Admin</Button>
    </>
  );
}
