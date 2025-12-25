import { ReactNode, useMemo } from "react";

import { Product } from "../types";
import ProductImagePreview from "../product/ProductImagePreview";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import ProductStatusComponent from "@sellify/common-ui-components/statuses/ProductStatusComponent";

type Props = {
  content: Array<Product>;
};

export default function ProductsView({ content }: Props) {
  const tableHeader: Array<string> = [
    "",
    "Product",
    "Product ID",
    "Category",
    "Price",
    "Inventory",
    "Status",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((product) => [
      <ProductImagePreview src={product.image} />,
      <LinkButton>
        <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
          {product.title}
        </p>
      </LinkButton>,
      <p>{"#" + product.productId}</p>,
      <LinkButton>
        <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
          {product.category}
        </p>
      </LinkButton>,
      <p>{"$" + product.price}</p>,
      <p>{product.quantity + " in stock"}</p>,
      <ProductStatusComponent status={product.status} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
