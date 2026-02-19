"use client";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";

import { Admin } from "@sellify/admin-ui-components/types";
import AdminInfo from "@sellify/admin-ui-components/details/AdminInfo";
import InfoSection from "@sellify/admin-ui-components/InfoSection";

import SettingsButton from "components/SettingsButton";

type Props = {
  adminId: number;
  admin: Admin;
};

export default function AdminDetailsPage({ adminId, admin }: Props) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="py-4">{`Admin: ${admin.name} #${adminId} `}</h1>
        <SettingsButton url={`/admin/${adminId}/settings`} />
      </div>

      <div className="grow flex flex-col gap-12">
        <InfoSection title="Admin Details">
          <AdminInfo admin={admin} />
        </InfoSection>

        <InfoSection title="Role">
          <LinkButton href={`/role/${admin.role.roleId}`}>
            <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14 ">
              {admin.role.title}
            </p>
          </LinkButton>
        </InfoSection>
      </div>
    </>
  );
}
