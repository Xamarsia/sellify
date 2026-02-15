import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import ProductImageTableItem from "@sellify/common-ui-components/table-items/ProductImageTableItem";

import AddAmountButtonTableItem from "./AddAmountButtonTableItem";
import { InventoryProduct } from "../types";

type InventoryViewProps = {
  content: Array<InventoryProduct>;
  onSubmit: (productId: number, quantity: number) => void;
  disabled?: boolean;
  pagesAmount: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
};

export default function InventoryView({
  disabled,
  content,
  onSubmit,
  pagesAmount,
  currentPage,
  onPageChanged,
}: InventoryViewProps) {
  const tableHeader: Array<string> = [
    "",
    "Product",
    "Product ID",
    "Quantity",
    "Actions",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((inventory) => [
      <ProductImageTableItem src={inventory.image} />,
      <LinkTableItem
        href={`/product/${inventory.productId}`}
        text={inventory.productTitle}
      />,
      <IdTableItem id={inventory.productId} />,
      <p>{inventory.quantity}</p>,
      <AddAmountButtonTableItem
        onSubmit={onSubmit}
        productId={inventory.productId}
        disabled={disabled}
      />,
    ]);
  }, [content, disabled]);

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
