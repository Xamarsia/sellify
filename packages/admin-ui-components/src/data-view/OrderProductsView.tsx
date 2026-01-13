import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";

import { CartItem } from "../types";
import ProductImagePreview from "../product/ProductImagePreview";

type Props = {
  content: Array<CartItem>;
};

export default function OrderProductsView({ content }: Props) {
  const tableHeader = useMemo<Array<string>>(() => {
    const header: Array<string> = [
      "",
      "Product",
      "Quantity",
      "Price",
      "Subtotal",
    ];
    return header;
  }, []);

  const contentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((item) => [
      <ProductImagePreview src={item.product.image} />,
      <LinkTableItem
        href={`/product/${item.product.productId}`}
        text={item.product.title}
      />,
      <p>{item.amount}</p>,
      <CurrencyTableItem amount={item.product.price} />,
      <CurrencyTableItem amount={item.product.price * item.amount} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={contentArray} />;
}
