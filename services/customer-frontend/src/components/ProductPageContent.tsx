"use client";

import { useCallback, useContext } from "react";

import { TabItemInfo } from "@sellify/common-ui-components/types";
import Tabs from "@sellify/common-ui-components/tabs/Tabs";

import {
  CartItem,
  Product,
  ProductPreview,
} from "@sellify/customer-ui-components/types";
import ProductDetails from "@sellify/customer-ui-components/ProductDetails";

import { addToCart } from "common/actions/cart-actions";
import { getProductOverviewTabs } from "common/actions/product-actions";
import { ProductAddedDialogContext } from "common/contexts/cart-context";

type Props = {
  product: Product;
};

export default function ProductPageContent({ product }: Props) {
  const tabs: Array<TabItemInfo> = getProductOverviewTabs();
  const { openProductAddedDialog } = useContext(ProductAddedDialogContext);

  const handleAddToCartClick = useCallback((product: Product): void => {
    const preview: ProductPreview = {
      productId: product.productId,
      title: product.title,
      image: product.images[0],
      hoveredImage: product.images[1],
      price: product.price,
    };
    const cartItem: CartItem = addToCart(preview);
    openProductAddedDialog(cartItem);
  }, []);

  return (
    <div className="flex flex-col gap-9">
      <ProductDetails
        product={product}
        onAddProductToCart={handleAddToCartClick}
      />
      <Tabs items={tabs} pathname="/" />
    </div>
  );
}
