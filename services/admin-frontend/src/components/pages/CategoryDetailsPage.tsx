"use client";

import { useState } from "react";

import Card from "@sellify/admin-ui-components/card/Card";
import InfoSection from "@sellify/admin-ui-components/InfoSection";
import { Category, ProductPreview } from "@sellify/admin-ui-components/types";
import ProductPreviewView from "@sellify/admin-ui-components/data-view/ProductPreviewView";

import Filter from "components/Filter";
import { ProductsPreviewFilterSections } from "filter-sections/products-filter";
import SettingsButton from "components/SettingsButton";

type Props = {
  category: Category;
  relatedProducts: Array<ProductPreview>;
};

export default function CategoryDetailsPage({
  category,
  relatedProducts,
}: Props) {
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="py-4">{`Category: ${category.title}`}</h1>
        <SettingsButton url={`/category/${category.categoryId}/settings`} />
      </div>
      <Card label="Related Products" value="5" />
      <InfoSection title="Related Products">
        <Filter filterSections={ProductsPreviewFilterSections} />
        <ProductPreviewView
          content={relatedProducts}
          currentPage={page}
          onPageChanged={setPage}
          pagesAmount={10}
        />
      </InfoSection>
    </>
  );
}
