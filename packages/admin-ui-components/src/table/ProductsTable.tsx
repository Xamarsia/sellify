import { ReactNode, useMemo } from "react";

import TableView from "@sellify/common-ui-components/view/TableView";
import ProductStatusComponent from "@sellify/common-ui-components/statuses/ProductStatusComponent";
// import DynamicImagePreview from "@sellify/customer-ui-components/product-preview/DynamicImagePreview";

import { Product } from "../types";

type Props = {
  content: Array<Product>;
};

export default function ProductsTable({ content }: Props) {
  const tableHeader: Array<string> = [
    "Product",
    "Product ID",
    "Status",
    "Inventory",
    "Category",
    "Price",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((product) => [
      <div className="flex gap-4 items-center">
        <DynamicImagePreview src={product.image} />
        <h4>{product.title}</h4>
      </div>,
      <h4>{"#" + product.productId}</h4>,
      <ProductStatusComponent status={product.status} />,
      <p>{product.quantity + " in stock"}</p>,
      <p>{product.category}</p>,
      <p>{"$" + product.price}</p>,
    ]);
  }, [content]);

  return <TableView head={tableHeader} content={getContentArray} />;
}
