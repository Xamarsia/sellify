"use client";

import { useCallback, useContext, useEffect, useMemo, useState } from "react";

import { NavMenuItem, TabItemInfo } from "@sellify/common-ui-components/types";
import Tabs from "@sellify/common-ui-components/tabs/Tabs";

import {
  CartItem,
  ProductDetails as ProductDetailsType,
  ProductPreview,
} from "@sellify/customer-ui-components/types";
import ProductDetails from "@sellify/customer-ui-components/ProductDetails";

import { addToCart } from "actions/cart-actions";
import { getProductOverviewTabs } from "actions/product-actions";
import { ProductAddedDialogContext } from "contexts/cart-context";
import { BreadcrumbsContext } from "contexts/common-context";
import { BreadcrumbsController, ProductAddedDialogController } from "types";

type Props = {
  product: ProductDetailsType;
};

export default function ProductPageContent({ product }: Props) {
  const [tabs] = useState<Array<TabItemInfo>>(getProductOverviewTabs());
  const [hash, setHash] = useState<string | undefined>();
  const { openProductAddedDialog } = useContext<ProductAddedDialogController>(
    ProductAddedDialogContext,
  );
  const { setNavItem } = useContext<BreadcrumbsController>(BreadcrumbsContext);

  const breadcrumbs = useMemo<Array<NavMenuItem>>(() => {
    const crumbs: Array<NavMenuItem> = [
      { href: "/home", title: "Home" },
      { href: "/product/", title: `${product.title}` },
    ];
    return crumbs;
  }, [product]);

  useEffect(() => {
    const onWindowHashChange = () => setHash(window.location.hash);

    window.addEventListener("hashchange", onWindowHashChange);

    return () => {
      window.removeEventListener("hashchange", onWindowHashChange);
    };
  }, []);

  useEffect(() => {
    setNavItem(breadcrumbs);
  }, [breadcrumbs]);

  const validHash = useMemo<string>(() => {
    if (!tabs[0]) {
      return "#";
    } else if (hash && tabs.find((tab) => tab.href == hash)) {
      return hash;
    }

    return tabs[0].href;
  }, [hash, tabs]);

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
    <div className="flex flex-col gap-9 w-full">
      <ProductDetails
        product={product}
        onAddProductToCart={handleAddToCartClick}
      />
      {tabs.length != 0 && <Tabs items={tabs} hash={validHash} />}
    </div>
  );
}
