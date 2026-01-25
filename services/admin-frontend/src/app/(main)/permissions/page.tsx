"use client";

import { useState } from "react";

import { Permission } from "@sellify/admin-ui-components/types";
import PermissionsView from "@sellify/admin-ui-components/data-view/PermissionsView";

import PageTitle from "components/PageTitle";
import { getPermissions } from "actions/permissions-actions";
import Filter from "components/Filter";
import { PermissionsFilterSections } from "filter-sections/permissions-filter";

export default function PermissionsPage() {
  const defaultPermissions: Array<Permission> = getPermissions();
  const [permissions, setPermissions] =
    useState<Array<Permission>>(defaultPermissions);

  return (
    <>
      <PageTitle />

      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-end">
          <Filter filterSections={PermissionsFilterSections} />
        </div>
        <PermissionsView content={permissions} />
      </div>
    </>
  );
}
