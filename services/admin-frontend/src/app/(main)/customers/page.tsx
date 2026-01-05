"use client";

import { ChangeEvent, useCallback, useState } from "react";

import SearchInput from "@sellify/common-ui-components/input/SearchInput";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";

import { Customer } from "@sellify/admin-ui-components/types";
import CustomersView from "@sellify/admin-ui-components/data-view/CustomersView";

import PageTitle from "components/PageTitle";
import { filterCustomers, getCustomers } from "common/actions/customer-actions";

export default function CustomersPage() {
  const defaultCustomers: Array<Customer> = getCustomers();
  const [query, setQuery] = useState<string>("");
  const [sortByKey, setSortByKey] = useState<string>();
  const [customers, setCustomers] = useState<Array<Customer>>(defaultCustomers);

  const comboboxSortItems = new Map<string, string>([
    ["byOrdersAmount", "Rank by orders amount"],
    ["byName", "Rank by name"],
    ["bySpentAmount", "Rank by spent amount"],
    ["status", "Rank by status"],
  ]);

  const onSearchChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const query: string = e.target.value;
      setQuery(query);
      setCustomers(query ? filterCustomers(query) : defaultCustomers);
    },
    [],
  );

  return (
    <>
      <PageTitle />
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
        <CustomersView content={customers} />
      </div>
    </>
  );
}
