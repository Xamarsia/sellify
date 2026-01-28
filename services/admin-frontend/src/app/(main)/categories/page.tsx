"use client";

import { useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";

import { Category } from "@sellify/admin-ui-components/types";
import CategoriesView from "@sellify/admin-ui-components/data-view/CategoriesView";

import { getCategories } from "actions/category-actions";
import PageTitle from "components/PageTitle";
import Filter from "components/Filter";
import { CategoriesFilterSections } from "filter-sections/categories-filter";

export default function CategoriesPage() {
  const categories: Array<Category> = getCategories();
  const [currentCategories, setCurrentCategories] =
    useState<Array<Category>>(categories);
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <PageTitle />

      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-end">
          <Filter filterSections={CategoriesFilterSections} />
        </div>
        <CategoriesView
          content={currentCategories}
          currentPage={page}
          onPageChanged={setPage}
          pagesAmount={10}
        />
        <Button size="small">Add Category</Button>
      </div>
    </>
  );
}
