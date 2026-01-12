import "server-only";

import Button from "@sellify/common-ui-components/buttons/Button";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";

import { Admin } from "@sellify/admin-ui-components/types";
import AdminInfo from "@sellify/admin-ui-components/details/AdminInfo";
import InfoSection from "@sellify/admin-ui-components/InfoSection";

import { getAdminById } from "common/actions/admins-actions";

type Props = {
  params: Promise<{ adminId: number }>;
};

export default async function AdminDetailsPage({ params }: Props) {
  const adminId: number = (await params).adminId;
  const admin: Admin = getAdminById(adminId);

  return (
    <>
      <h1 className="py-4">{`Admin: ${admin.name} #${admin.adminId} `}</h1>

      <div className="grow flex flex-col gap-12">
        <InfoSection title="Admin Details">
          <AdminInfo admin={admin} />
        </InfoSection>

        <InfoSection title="Role">
          <div className="flex w-full justify-between">
            <LinkButton href={`/role/${admin.role.roleId}`}>
              <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
                {admin.role.title}
              </p>
            </LinkButton>
            <Button size="small">Change Role</Button>
          </div>
        </InfoSection>
      </div>
      <Button variant="destructive">Disable Admin</Button>
    </>
  );
}
