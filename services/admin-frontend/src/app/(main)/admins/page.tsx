"use client";

import { useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";

import { Admin } from "@sellify/admin-ui-components/types";
import AdminsView from "@sellify/admin-ui-components/data-view/AdminsView";

import PageTitle from "components/PageTitle";
import { getAdmins } from "actions/admins-actions";
import Filter from "components/Filter";
import { AdminFilterSections } from "filter-sections/admins-filter";

export default function AdminsPage() {
  const defaultAdmins: Array<Admin> = getAdmins();
  const [admins, setAdmins] = useState<Array<Admin>>(defaultAdmins);
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <PageTitle />

      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-end">
          <Filter filterSections={AdminFilterSections} />
        </div>
        <AdminsView
          content={admins}
          currentPage={page}
          onPageChanged={setPage}
          pagesAmount={10}
        />
        <Button size="small">Create Admin</Button>
      </div>
    </>
  );
}
