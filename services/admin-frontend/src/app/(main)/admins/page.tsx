"use client";

import { ChangeEvent, useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import SearchInput from "@sellify/common-ui-components/input/SearchInput";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";

import { Admin, Role } from "@sellify/admin-ui-components/types";
import AdminsView from "@sellify/admin-ui-components/data-view/AdminsView";

import PageTitle from "components/PageTitle";
import { filterAdmins, getAdmins } from "common/actions/admins-actions";
import Filter from "components/Filter";
import { AdminFilterSections } from "filter-sections/admins-filter";

export default function AdminsPage() {
  const defaultAdmins: Array<Admin> = getAdmins();
  const [query, setQuery] = useState<string>("");
  const [sortByKey, setSortByKey] = useState<string>();
  const [admins, setAdmins] = useState<Array<Admin>>(defaultAdmins);

  const comboboxSortItems = new Map<string, string>([
    ["newest", "Rank by newest"],
    ["oldest", "Rank by oldest"],
  ]);

  const onSearchChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const query: string = e.target.value;
      setQuery(query);
      setAdmins(query ? filterAdmins(query) : defaultAdmins);
    },
    [],
  );

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle />
        <Button size="small">Create Admin</Button>
      </div>

      <div className="flex flex-col w-full gap-4">
        <Filter filterSections={AdminFilterSections} />
        <div className="relative flex w-full justify-between items-start gap-4">
          <SearchInput value={query} onChange={onSearchChanged} />
          <Dropdown
            title={"sort by"}
            items={comboboxSortItems}
            selectedKey={sortByKey}
            onKeySelected={setSortByKey}
          />
        </div>
        <AdminsView content={admins} />
      </div>
    </>
  );
}
