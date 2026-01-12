import { ReactNode, useMemo } from "react";

import { ProductPreview } from "../types";
import ProductImagePreview from "../product/ProductImagePreview";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

type Props = {
  content: Array<ProductPreview>;
};

export default function ProductPreviewView({ content }: Props) {
  const tableHeader: Array<string> = ["", "Product", "Product ID"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((product) => [
      <ProductImagePreview src={product.image} />,

      <LinkButton href={`/product/${product.productId}`}>
        <h4 className="line-clamp-3 break-all min-w-20 not-sm:pl-14">
          {product.title}
        </h4>
      </LinkButton>,

      <p>{"#" + product.productId}</p>,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
