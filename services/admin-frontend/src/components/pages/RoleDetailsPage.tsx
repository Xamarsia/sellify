"use client";

import Button from "@sellify/common-ui-components/buttons/Button";

import Card from "@sellify/admin-ui-components/card/Card";
import InfoSection from "@sellify/admin-ui-components/InfoSection";
import { AdminPreview, Role } from "@sellify/admin-ui-components/types";
import AdminsPreviewView from "@sellify/admin-ui-components/data-view/AdminsPreviewView";
import PermissionsMultiSelectionCombobox from "@sellify/admin-ui-components/PermissionsMultiSelectionCombobox";

import Filter from "components/Filter";
import { AdminPreviewFilterSections } from "filter-sections/admins-filter";
import { useState } from "react";

type Props = {
  role: Role;
  relatedAdmins: Array<AdminPreview>;
};

export default function RoleDetailsPage({ role, relatedAdmins }: Props) {
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <h1 className="py-4">{`Role: ${role.title}`}</h1>
      <Card label="Related Users" value="5" />

      <InfoSection title="Permissions List">
        <PermissionsMultiSelectionCombobox
          defaultSelectedPermissions={role.permissions}
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

      <div className="flex w-full justify-between">
        <Button variant="destructive">Remove Role</Button>
        <Button>Edit Role</Button>
      </div>
    </>
  );
}
