import { ReactNode, useMemo } from "react";

import { CartItem } from "../types";
import ProductImagePreview from "../product-preview/ProductImagePreview";
import TableView from "@sellify/common-ui-components/view/TableView";

type Props = {
  content: Array<CartItem>;
};

export default function FinalProductsView({ content }: Props) {
  const tableHeader: Array<string> = [
    "Product",
    "Price",
    "Quantity",
    "Subtotal",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((item) => [
      <div className="flex gap-4 items-center shrink-0">
        <ProductImagePreview src={item.product.image} />
        <h4 className="text-justify line-clamp-2 break-all hover:underline underline-offset-3 min-w-40 max-w-96">
          {item.product.title}
        </h4>
      </div>,
      <p>{"$" + item.product.price}</p>,
      <p>{item.amount}</p>,
      <p>{"$" + item.product.price * item.amount}</p>,
    ]);
  }, [content]);

  return <TableView head={tableHeader} content={getContentArray} />;
}
