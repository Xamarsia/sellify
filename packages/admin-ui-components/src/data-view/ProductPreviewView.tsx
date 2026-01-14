import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";

import { ProductPreview } from "../types";
import ProductImagePreview from "../product/ProductImagePreview";

type Props = {
  content: Array<ProductPreview>;
};

export default function ProductPreviewView({ content }: Props) {
  const tableHeader: Array<string> = ["", "Product", "Product ID"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((product) => [
      <ProductImagePreview src={product.image} />,
      <LinkTableItem
        href={`/product/${product.productId}`}
        text={product.title}
      />,
      <IdTableItem id={product.productId} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
