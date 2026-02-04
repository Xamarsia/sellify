"use client";

import { useState } from "react";

import { Permission } from "@sellify/admin-ui-components/types";
import Card from "@sellify/admin-ui-components/card/Card";
import PermissionsView from "@sellify/admin-ui-components/data-view/PermissionsView";

import PageTitle from "components/PageTitle";
import { getPermissions } from "actions/permissions-actions";
import Filter from "components/Filter";
import { PermissionsFilterSections } from "filter-sections/permissions-filter";

export default function PermissionsPage() {
  const [page, setPage] = useState<number>(1);
  const defaultPermissions: Array<Permission> = getPermissions();
  const [permissions, setPermissions] =
    useState<Array<Permission>>(defaultPermissions);

  return (
    <>
      <PageTitle />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card label="Permissions Amount" value="345" />
        <Card label="Most Popular Permission" value="Rings" />
      </div>

      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-end">
          <Filter filterSections={PermissionsFilterSections} />
        </div>
        <PermissionsView
          content={permissions}
          currentPage={page}
          onPageChanged={setPage}
          pagesAmount={10}
        />
      </div>
    </>
  );
}
