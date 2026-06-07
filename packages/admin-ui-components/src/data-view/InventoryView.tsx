import { useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import ProductImageTableItem from "@sellify/common-ui-components/table-items/ProductImageTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

import AddAmountButtonTableItem from "./AddAmountButtonTableItem";
import { InventoryProduct } from "../types";

type InventoryViewProps = {
  content: Array<InventoryProduct>;
  onSubmit: (productId: number, quantity: number) => void;
  disabled?: boolean;
};

export default function InventoryView({
  disabled,
  content,
  onSubmit,
}: InventoryViewProps) {
  const cellPrototypes = useMemo<ReadonlyArray<Cell<InventoryProduct>>>(
    () => [
      {
        title: "",
        viewBuilder: ({ image }) => <ProductImageTableItem src={image} />,
      },
      {
        title: "Product",
        viewBuilder: ({ productId, productTitle }) => (
          <LinkTableItem href={`/product/${productId}`} text={productTitle} />
        ),
      },
      {
        title: "Product ID",
        viewBuilder: ({ productId }) => <IdTableItem id={productId} />,
      },
      {
        title: "Quantity",
        viewBuilder: ({ quantity }) => <p>{quantity}</p>,
      },
      {
        title: "Actions",
        viewBuilder: ({ productId }) => (
          <AddAmountButtonTableItem
            onSubmit={onSubmit}
            productId={productId}
            disabled={disabled}
          />
        ),
      },
    ],
    [disabled, onSubmit],
  );

  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
