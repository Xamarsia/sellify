import { ReactNode, useMemo } from "react";

import Table from "@sellify/common-ui-components/table/Table";

import AddAmountButtonTableItem from "./AddAmountButtonTableItem";
import ProductPreviewImage from "../ProductPreviewImage";

type Props = {
  content: Array<Inventory>;
  onSubmit: (value: number) => void;
  disabled?: boolean;
};

export default function InventoryTable({ disabled, content, onSubmit }: Props) {
  const tableHeader: Array<string> = [
    "Product",
    "Product ID",
    "Quantity",
    "Actions",
  ];

  const getContentArray = useMemo((): Array<Array<ReactNode>> => {
    return content.map((inventory) => [
      <div className="flex gap-4 items-center">
        <ProductPreviewImage src={inventory.image} />
        <h4>{inventory.productTitle}</h4>
      </div>,
      <h4>{"#" + inventory.productId}</h4>,
      <p>{inventory.quantity + " in stock"}</p>,
      <AddAmountButtonTableItem onSubmit={onSubmit} disabled={disabled} />,
    ]);
  }, [content, disabled]);

  return <Table head={tableHeader} content={getContentArray} />;
}
