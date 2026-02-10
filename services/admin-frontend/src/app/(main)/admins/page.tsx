"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Button from "@sellify/common-ui-components/buttons/Button";

import { Admin } from "@sellify/admin-ui-components/types";
import Card from "@sellify/admin-ui-components/card/Card";
import AdminsView from "@sellify/admin-ui-components/data-view/AdminsView";

import PageTitle from "components/PageTitle";
import { getAdmins } from "actions/admins-actions";
import Filter from "components/Filter";
import { AdminFilterSections } from "filter-sections/admins-filter";

export default function AdminsPage() {
  const defaultAdmins: Array<Admin> = getAdmins();
  const [admins, setAdmins] = useState<Array<Admin>>(defaultAdmins);
  const [page, setPage] = useState<number>(1);
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle />
        <Button
          size="small"
          onClick={() => {
            router.push(`/admin/create`);
          }}
        >
          Create Admin
        </Button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card label="Total Admin Users" value="823" />
        <Card label="Active Admins" value="213" />
      </div>

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
      </div>
    </>
  );
}
