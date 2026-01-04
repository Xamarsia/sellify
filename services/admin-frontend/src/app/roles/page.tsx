"use client";

import { ChangeEvent, useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import SearchInput from "@sellify/common-ui-components/input/SearchInput";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";

import { Role } from "@sellify/admin-ui-components/types";
import RolesView from "@sellify/admin-ui-components/data-view/RolesView";

import PageTitle from "components/PageTitle";
import { filterRoles, getRoles } from "common/actions/roles-actions";

export default function RolesPage() {
  const defaultRoles: Array<Role> = getRoles();
  const [query, setQuery] = useState<string>("");
  const [sortByKey, setSortByKey] = useState<string>();
  const [roles, setRoles] = useState<Array<Role>>(defaultRoles);

  const comboboxSortItems = new Map<string, string>([
    ["byUsersAmount", "Rank by related users amount"],
  ]);

  const onSearchChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const query: string = e.target.value;
      setQuery(query);
      setRoles(query ? filterRoles(query) : defaultRoles);
    },
    [],
  );

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle />
        <Button size="small">Add Role</Button>
      </div>

      <div className="flex flex-col w-full gap-4">
        <div className="relative flex w-full justify-between items-start gap-4">
          <SearchInput value={query} onChange={onSearchChanged} />
          <Dropdown
            title={"sort by"}
            items={comboboxSortItems}
            selectedKey={sortByKey}
            onKeySelected={setSortByKey}
          />
        </div>
        <RolesView content={roles} />
      </div>
    </>
  );
}
