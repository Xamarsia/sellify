import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";

import ProductImagePreview from "../product/ProductImagePreview";
import AddAmountButtonTableItem from "./AddAmountButtonTableItem";
import { InventoryProduct } from "../types";

type Props = {
  content: Array<InventoryProduct>;
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
