"use client";

import { ChangeEvent, useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import SearchInput from "@sellify/common-ui-components/input/SearchInput";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";

import { Product } from "@sellify/admin-ui-components/types";
import ProductsView from "@sellify/admin-ui-components/data-view/ProductsView";

import { filterProducts, getProducts } from "common/actions/product-actions";
import { ProductsFilterSections } from "filter-sections/products-filter";
import PageTitle from "components/PageTitle";
import Filter from "components/Filter";

export default function ProductsPage() {
  const products: Array<Product> = getProducts();
  const [query, setQuery] = useState<string>("");
  const [sortByKey, setSortByKey] = useState<string>();
  const [currentProducts, setCurrentProducts] =
    useState<Array<Product>>(products);

  const comboboxSortItems = new Map<string, string>([
    ["newest", "Rank by newest date"],
    ["oldest", "Rank by oldest date"],
    ["byLowestPrice", "Rank by lowest price"],
    ["byHighestPrice", "Rank by highest price"],
  ]);

  const onSearchChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const query: string = e.target.value;
      setQuery(query);
      setCurrentProducts(query ? filterProducts(query) : products);
    },
    [],
  );

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle />
        <Button size="small">Add Product</Button>
      </div>

      <div className="flex flex-col w-full gap-4">
        <Filter filterSections={ProductsFilterSections} />
        <div className="relative flex w-full justify-between items-start gap-4">
          <SearchInput value={query} onChange={onSearchChanged} />
          <Dropdown
            title={"sort by"}
            items={comboboxSortItems}
            selectedKey={sortByKey}
            onKeySelected={setSortByKey}
          />
        </div>
        <ProductsView content={currentProducts} />
      </div>
    </>
  );
}
