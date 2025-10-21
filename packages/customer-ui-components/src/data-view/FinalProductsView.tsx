import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

import { CartItem } from "../types";
import ProductImagePreview from "../product-preview/ProductImagePreview";

type Props = {
  content: Array<CartItem>;
};

export default function FinalProductsView({ content }: Props) {

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

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((item) => [
      <ProductImagePreview src={item.product.image} />,
      <h4 className="text-justify line-clamp-3 break-all hover:underline underline-offset-3 min-w-20 max-w-96 not-sm:pl-14">
        {item.product.title}
      </h4>,
      <p>{item.amount}</p>,
      <p>{"$" + item.product.price}</p>,
      <p>{"$" + item.product.price * item.amount}</p>,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
