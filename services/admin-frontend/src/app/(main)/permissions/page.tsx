"use client";

import { ChangeEvent, useCallback, useState } from "react";

import SearchInput from "@sellify/common-ui-components/input/SearchInput";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";

import { Permission } from "@sellify/admin-ui-components/types";
import PermissionsView from "@sellify/admin-ui-components/data-view/PermissionsView";

import PageTitle from "components/PageTitle";
import {
  filterPermissions,
  getPermissions,
} from "common/actions/permissions-actions";

export default function PermissionsPage() {
  const defaultPermissions: Array<Permission> = getPermissions();
  const [query, setQuery] = useState<string>("");
  const [sortByKey, setSortByKey] = useState<string>();
  const [permissions, setPermissions] =
    useState<Array<Permission>>(defaultPermissions);

  const comboboxSortItems = new Map<string, string>([
    ["byUsersAmount", "Rank by related users amount"],
  ]);

  const onSearchChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const query: string = e.target.value;
      setQuery(query);
      setPermissions(query ? filterPermissions(query) : defaultPermissions);
    },
    [],
  );

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle />
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
        <PermissionsView content={permissions} />
      </div>
    </>
  );
}
