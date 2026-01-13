import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import ProductStatusComponent from "@sellify/common-ui-components/statuses/ProductStatusComponent";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";

import { Product } from "../types";
import ProductImagePreview from "../product/ProductImagePreview";

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
      <CurrencyTableItem amount={product.price} />,
      <p>{product.quantity}</p>,
      <ProductStatusComponent status={product.status} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
