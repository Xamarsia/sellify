"use client";

import { useState } from "react";
import Button from "@sellify/common-ui-components/buttons/Button";

import { Product } from "@sellify/admin-ui-components/types";
import Card from "@sellify/admin-ui-components/card/Card";
import ProductsView from "@sellify/admin-ui-components/data-view/ProductsView";

import { getProducts } from "actions/product-actions";
import { ProductsFilterSections } from "filter-sections/products-filter";
import PageTitle from "components/PageTitle";
import Filter from "components/Filter";

export default function ProductsPage() {
  const [page, setPage] = useState<number>(1);
  const products: Array<Product> = getProducts();
  const [currentProducts, setCurrentProducts] =
    useState<Array<Product>>(products);

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle />
        <Button size="small">Add Product</Button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <Card label="Total Units Sold" value="$7,823" />
        <Card label="Product Amount" value="345" />
        <Card label="Active Products" value="213" />
      </div>

      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-end">
          <Filter filterSections={ProductsFilterSections} />
        </div>
        <ProductsView
          content={currentProducts}
          currentPage={page}
          onPageChanged={setPage}
          pagesAmount={10}
        />
      </div>
    </>
  );
}
