import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

import { Inventory } from "../types";
import ProductImagePreview from "../product/ProductImagePreview";
import AddAmountButtonTableItem from "./AddAmountButtonTableItem";
import LinkTableItem from "../table-items/LinkTableItem";
import IdTableItem from "../table-items/IdTableItem";

type Props = {
  content: Array<Inventory>;
  onSubmit: (productId: number, quantity: number) => void;
  disabled?: boolean;
};

export default function InventoryView({ disabled, content, onSubmit }: Props) {
  const tableHeader: Array<string> = [
    "",
    "Product",
    "Product ID",
    "Quantity",
    "Actions",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((inventory) => [
      <ProductImagePreview src={inventory.image} />,
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

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
