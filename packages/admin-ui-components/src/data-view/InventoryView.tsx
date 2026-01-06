import { ReactNode, useMemo } from "react";

import { Inventory } from "../types";
import ProductImagePreview from "../product/ProductImagePreview";
import AddAmountButtonTableItem from "./AddAmountButtonTableItem";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

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
      <LinkButton>
        <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
          {inventory.productTitle}
        </p>
      </LinkButton>,
      <p>{"#" + inventory.productId}</p>,
      <p>{inventory.quantity + " in stock"}</p>,
      <AddAmountButtonTableItem
        onSubmit={onSubmit}
        productId={inventory.productId}
        disabled={disabled}
      />,
    ]);
  }, [content, disabled]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
