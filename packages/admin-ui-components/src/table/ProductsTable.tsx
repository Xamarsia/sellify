import { ReactNode, useMemo } from "react";

import Table from "@sellify/common-ui-components/table/Table";
import ProductStatusComponent from "@sellify/common-ui-components/statuses/ProductStatusComponent";

import ProductPreviewImage from "../ProductPreviewImage";

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

  const getContentArray = useMemo((): Array<Array<ReactNode>> => {
    return content.map((product) => [
      <div className="flex gap-4 items-center">
        <ProductPreviewImage src={product.image} />
        <h4>{product.title}</h4>
      </div>,
      <h4>{"#" + product.productId}</h4>,
      <ProductStatusComponent status={product.status} />,
      <p>{product.quantity + " in stock"}</p>,
      <p>{product.category}</p>,
      <p>{"$" + product.price}</p>,
    ]);
  }, [content]);

  return <Table head={tableHeader} content={getContentArray} />;
}
