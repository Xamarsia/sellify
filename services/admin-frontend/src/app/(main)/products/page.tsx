"use client";

import { useState } from "react";
import Button from "@sellify/common-ui-components/buttons/Button";

import { Product } from "@sellify/admin-ui-components/types";
import ProductsView from "@sellify/admin-ui-components/data-view/ProductsView";

import { getProducts } from "actions/product-actions";
import { ProductsFilterSections } from "filter-sections/products-filter";
import PageTitle from "components/PageTitle";
import Filter from "components/Filter";

export default function ProductsPage() {
  const products: Array<Product> = getProducts();
  const [currentProducts, setCurrentProducts] =
    useState<Array<Product>>(products);

  return (
    <>
      <PageTitle />

      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-end">
          <Filter filterSections={ProductsFilterSections} />
        </div>
        <ProductsView content={currentProducts} />
        <Button size="small">Add Product</Button>
      </div>
    </>
  );
}
