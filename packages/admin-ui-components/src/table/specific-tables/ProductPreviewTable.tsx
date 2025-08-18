import { ReactNode, useMemo } from "react";

import Table from "../Table";
import ProductPreviewImage from "../../ProductPreviewImage";

type Props = {
  content: Array<ProductPreview>;
};

export default function ProductPreviewTable({ content }: Props) {
  const tableHeader: Array<string> = ["Product", "Product ID"];

  const getContentArray = useMemo((): Array<Array<ReactNode>> => {
    return content.map((product) => [
      <div className="flex gap-4 items-center">
        <ProductPreviewImage src={product.image} />
        <h4>{product.title}</h4>
      </div>,
      <h4>{"#" + product.productId}</h4>,
    ]);
  }, [content]);

  return <Table head={tableHeader} content={getContentArray} />;
}
