import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import ProductImageTableItem from "@sellify/common-ui-components/table-items/ProductImageTableItem";

import { ProductPreview } from "../types";

type ProductPreviewViewProps = {
  content: Array<ProductPreview>;
  pagesAmount: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
};

export default function ProductPreviewView({
  content,
  pagesAmount,
  currentPage,
  onPageChanged,
}: ProductPreviewViewProps) {
  const tableHeader: Array<string> = ["", "Product", "Product ID"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((product) => [
      <ProductImageTableItem src={product.image} />,
      <LinkTableItem
        href={`/product/${product.productId}`}
        text={product.title}
      />,
      <IdTableItem id={product.productId} />,
    ]);
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
