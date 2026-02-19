"use client";

import { useState } from "react";

import Card from "@sellify/admin-ui-components/card/Card";
import InfoSection from "@sellify/admin-ui-components/InfoSection";
import { AdminPreview, Role } from "@sellify/admin-ui-components/types";
import AdminsPreviewView from "@sellify/admin-ui-components/data-view/AdminsPreviewView";
import PermissionsMultiSelectionCombobox from "@sellify/admin-ui-components/PermissionsMultiSelectionCombobox";

import Filter from "components/Filter";
import { AdminPreviewFilterSections } from "filter-sections/admins-filter";
import SettingsButton from "components/SettingsButton";

type Props = {
  role: Role;
  relatedAdmins: Array<AdminPreview>;
};

export default function RoleDetailsPage({ role, relatedAdmins }: Props) {
  const [page, setPage] = useState<number>(1);
  const [selectedPermissions, setSelectedPermissions] = useState<
    Map<number, string>
  >(new Map());

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="py-4">{`Role: ${role.title}`}</h1>
        <SettingsButton url={`/role/${role.roleId}/settings`} />
      </div>
      <Card label="Related Users" value="5" />

      <InfoSection title="Permissions List">
        <PermissionsMultiSelectionCombobox
          defaultSelectedPermissions={role.permissions}
          selectedPermissions={selectedPermissions}
          onSelectedPermissionsChanged={setSelectedPermissions}
          disabled
        />
      </InfoSection>

      <InfoSection title="Related Users">
        <Filter filterSections={AdminPreviewFilterSections} />
        <AdminsPreviewView
          content={relatedAdmins}
          currentPage={page}
          onPageChanged={setPage}
          pagesAmount={10}
        />
      </InfoSection>
    </>
  );
}
