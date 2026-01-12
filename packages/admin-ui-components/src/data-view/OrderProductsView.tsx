import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

import { CartItem } from "../types";
import ProductImagePreview from "../product/ProductImagePreview";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";

type Props = {
  content: Array<CartItem>;
};

export default function OrderProductsView({ content }: Props) {
  const tableHeader = useMemo<Array<string>>(() => {
    const header: Array<string> = [
      "",
      "Product",
      "Quantity",
      "Price",
      "Subtotal",
    ];
    return header;
  }, []);

  const contentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((item) => [
      <ProductImagePreview src={item.product.image} />,
      <LinkButton href={`/product/${item.product.productId}`}>
        <h4 className="text-justify line-clamp-3 break-all hover:underline underline-offset-3 min-w-20 max-w-96 not-sm:pl-14">
          {item.product.title}
        </h4>
      </LinkButton>,
      <p>{item.amount}</p>,
      <p>{"$" + item.product.price}</p>,
      <p>{"$" + item.product.price * item.amount}</p>,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={contentArray} />;
}
