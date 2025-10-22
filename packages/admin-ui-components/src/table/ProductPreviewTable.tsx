import { ReactNode, useMemo } from "react";

import TableView from "@sellify/common-ui-components/view/TableView";
// import DynamicImagePreview from "@sellify/customer-ui-components/product-preview/DynamicImagePreview";

import { ProductPreview } from "../types";

type Props = {
  content: Array<ProductPreview>;
};

export default function ProductPreviewTable({ content }: Props) {
  const tableHeader: Array<string> = ["Product", "Product ID"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((product) => [
      <div className="flex gap-4 items-center">
        <DynamicImagePreview src={product.image} />
        <h4>{product.title}</h4>
      </div>,
      <h4>{"#" + product.productId}</h4>,
    ]);
  }, [content]);

  return <TableView head={tableHeader} content={getContentArray} />;
}
