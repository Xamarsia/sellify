"use client";

import { useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";

import { Role } from "@sellify/admin-ui-components/types";
import RolesView from "@sellify/admin-ui-components/data-view/RolesView";

import PageTitle from "components/PageTitle";
import { getRoles } from "actions/roles-actions";
import Filter from "components/Filter";
import { RolesFilterSections } from "filter-sections/roles-filter";

export default function RolesPage() {
  const defaultRoles: Array<Role> = getRoles();
  const [roles, setRoles] = useState<Array<Role>>(defaultRoles);
  return (
    <>
      <PageTitle />

      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-end">
          <Filter filterSections={RolesFilterSections} />
        </div>
        <RolesView content={roles} />
        <Button size="small">Add Role</Button>
      </div>
    </>
  );
}
