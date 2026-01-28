import { ReactNode, useMemo, useState } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";

import { Category } from "../types";

type Props = {
  content: Array<Category>;
  pagesAmount: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
};

export default function CategoriesView({
  content,
  pagesAmount,
  currentPage,
  onPageChanged,
}: Props) {
  const tableHeader: Array<string> = [
    "Category",
    "Category ID",
    "Related Products Amount",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((category) => {
      return [
        <LinkTableItem
          href={`/category/${category.categoryId}`}
          text={category.title}
        />,
        <IdTableItem id={category.categoryId} />,
        <p>{category.relatedProductsCount}</p>,
      ];
    });
  }, [content]);

  return (
    <AdaptiveDataView
      head={tableHeader}
      content={getContentArray}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      pagesAmount={pagesAmount}
    />
  );
}
