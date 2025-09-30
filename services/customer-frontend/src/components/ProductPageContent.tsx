"use client";

import { useCallback, useContext, useEffect, useState } from "react";

import { TabItemInfo } from "@sellify/common-ui-components/types";
import Tabs from "@sellify/common-ui-components/tabs/Tabs";

import {
  CartItem,
  ProductDetails as ProductDetailsType,
  ProductPreview,
} from "@sellify/customer-ui-components/types";
import ProductDetails from "@sellify/customer-ui-components/ProductDetails";

import { addToCart } from "common/actions/cart-actions";
import { getProductOverviewTabs } from "common/actions/product-actions";
import { ProductAddedDialogContext } from "common/contexts/cart-context";

type Props = {
  product: ProductDetailsType;
};

export default function ProductPageContent({ product }: Props) {
  const [hash, setHash] = useState(window.location.hash);

  const tabs: Array<TabItemInfo> = getProductOverviewTabs();
  const { openProductAddedDialog } = useContext(ProductAddedDialogContext);

  useEffect(() => {
    window.addEventListener("hashchange", () => setHash(window.location.hash));
    return () => {
      window.removeEventListener("hashchange", () =>
        setHash(window.location.hash),
      );
    };
  }, [hash]);

  const handleAddToCartClick = useCallback(
    (product: ProductDetailsType): void => {
      const preview: ProductPreview = {
        productId: product.productId,
        title: product.title,
        image: product.images[0],
        hoveredImage: product.images[1],
        price: product.price,
      };
      const cartItem: CartItem = addToCart(preview);
      openProductAddedDialog(cartItem);
    },
    [],
  );

  return (
    <div className="flex flex-col gap-9">
      <ProductDetails
        product={product}
        onAddProductToCart={handleAddToCartClick}
      />
      <Tabs items={tabs} pathname={hash} />
    </div>
  );
}
