"use client";

import { ChangeEvent, useCallback, useState } from "react";

import SearchInput from "@sellify/common-ui-components/input/SearchInput";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";

import { Inventory } from "@sellify/admin-ui-components/types";
import InventoryView from "@sellify/admin-ui-components/data-view/InventoryView";

import {
  filterInventoryProducts,
  getInventoryProducts,
  setProductQuantity,
} from "common/actions/inventory-actions";
import PageTitle from "components/PageTitle";

export default function InventoryPage() {
  const defaultProducts: Array<Inventory> = getInventoryProducts();
  const [query, setQuery] = useState<string>("");
  const [sortByKey, setSortByKey] = useState<string>();
  const [inventoryProducts, setInventoryProducts] =
    useState<Array<Inventory>>(defaultProducts);

  const comboboxSortItems = new Map<string, string>([
    ["byLowestAmount", "Rank by lowest amount"],
    ["byHighestAmount", "Rank by highest amount"],
  ]);

  const onSearchChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const query: string = e.target.value;
      setQuery(query);
      setInventoryProducts(
        query ? filterInventoryProducts(query) : defaultProducts,
      );
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
        <InventoryView
          content={inventoryProducts}
          onSubmit={setProductQuantity}
        />
      </div>
    </>
  );
}
