import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import ProductStatusComponent from "@sellify/common-ui-components/statuses/ProductStatusComponent";

import { Product } from "../types";
import ProductImagePreview from "../product/ProductImagePreview";
import LinkTableItem from "../table-items/LinkTableItem";
import IdTableItem from "../table-items/IdTableItem";

type Props = {
  content: Array<Product>;
};

export default function ProductsView({ content }: Props) {
  const tableHeader: Array<string> = [
    "",
    "Product",
    "Product ID",
    "Category",
    "Price",
    "Inventory",
    "Status",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((product) => [
      <ProductImagePreview src={product.image} />,
      <LinkTableItem
        href={`/product/${product.productId}`}
        text={product.title}
      />,
      <IdTableItem id={product.productId} />,
      <LinkTableItem
        href={`/category/${product.category.categoryId}`}
        text={product.category.title}
      />,
      <p>{"$" + product.price}</p>,
      <p>{product.quantity + " in stock"}</p>,
      <ProductStatusComponent status={product.status} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
