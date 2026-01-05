"use client";

import { ChangeEvent, useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import SearchInput from "@sellify/common-ui-components/input/SearchInput";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";

import { Category } from "@sellify/admin-ui-components/types";
import CategoriesView from "@sellify/admin-ui-components/data-view/CategoriesView";
import {
  filterCategories,
  getCategories,
} from "common/actions/category-actions";

import PageTitle from "components/PageTitle";

export default function CategoriesPage() {
  const categories: Array<Category> = getCategories();
  const [query, setQuery] = useState<string>("");
  const [sortByKey, setSortByKey] = useState<string>();
  const [currentCategories, setCurrentCategories] =
    useState<Array<Category>>(categories);

  const comboboxSortItems = new Map<string, string>([
    ["byLowestAmount", "Rank by lowest amount"],
    ["byHighestAmount", "Rank by highest amount"],
  ]);

  const onSearchChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const query: string = e.target.value;
      setQuery(query);
      setCurrentCategories(query ? filterCategories(query) : categories);
    },
    [],
  );

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle />
        <Button size="small">Add Category</Button>
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
        <CategoriesView content={currentCategories} />
      </div>
    </>
  );
}
