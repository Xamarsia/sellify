import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";
import ProductImageTableItem from "@sellify/common-ui-components/table-items/ProductImageTableItem";

import { CartItem } from "../types";

type OrderProductsViewProps = {
  content: Array<CartItem>;
  pagesAmount: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
};

export default function OrderProductsView({
  content,
  pagesAmount,
  currentPage,
  onPageChanged,
}: OrderProductsViewProps) {
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
      <ProductImageTableItem src={item.product.image} />,
      <LinkTableItem
        href={`/product/${item.product.productId}`}
        text={item.product.title}
      />,
      <p>{item.amount}</p>,
      <CurrencyTableItem amount={item.product.price} />,
      <CurrencyTableItem amount={item.product.price * item.amount} />,
    ]);
  }, [content]);

  return (
    <AdaptiveDataView
      head={tableHeader}
      content={contentArray}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      pagesAmount={pagesAmount}
    />
  );
}
