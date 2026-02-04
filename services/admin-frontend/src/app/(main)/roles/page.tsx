"use client";

import { useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";

import { Role } from "@sellify/admin-ui-components/types";
import Card from "@sellify/admin-ui-components/card/Card";
import RolesView from "@sellify/admin-ui-components/data-view/RolesView";

import PageTitle from "components/PageTitle";
import { getRoles } from "actions/roles-actions";
import Filter from "components/Filter";
import { RolesFilterSections } from "filter-sections/roles-filter";

export default function RolesPage() {
  const defaultRoles: Array<Role> = getRoles();
  const [roles, setRoles] = useState<Array<Role>>(defaultRoles);
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle />
        <Button size="small">Add Role</Button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card label="Roles Amount" value="345" />
        <Card label="Most Common Role" value="ContentManager" />
      </div>

      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-end">
          <Filter filterSections={RolesFilterSections} />
        </div>
        <RolesView
          content={roles}
          currentPage={page}
          onPageChanged={setPage}
          pagesAmount={10}
        />
      </div>
    </>
  );
}
