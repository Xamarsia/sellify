"use client";

import { useCallback, useContext, useState } from "react";

import {
  CartItem,
  ProductPreview,
} from "@sellify/customer-ui-components/types";

import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";
import Pagination from "@sellify/common-ui-components/pages/Pagination";
import ProductPreviewFeed from "@sellify/customer-ui-components/product-preview/ProductPreviewFeed";

import { ProductAddedDialogContext } from "common/contexts/cart-context";
import { addToCart, getProductPreviews } from "common/actions/cart-actions";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [selectedKey, setSelectedKey] = useState<string>();

  const { openProductAddedDialog } = useContext(ProductAddedDialogContext);

  const onPageChanged = useCallback((newPage: number): void => {
    setPage(newPage);
  }, []);

  const comboboxItems = new Map<string, string>([
    ["bestseller", "Bestsellers"],
    ["rating", "Rating"],
    ["byLowestPrice", "Rank by lowest price"],
    ["byHighestPrice", "Rank by highest price"],
  ]);

  const handleAddToCartClick = useCallback(
    (productPreview: ProductPreview): void => {
      const cartItem: CartItem = addToCart(productPreview);
      openProductAddedDialog(cartItem);
    },
    [],
  );

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative flex grow w-full justify-end pb-6">
        <Dropdown
          title={"Sort By"}
          items={comboboxItems}
          selectedKey={selectedKey}
          onKeySelected={setSelectedKey}
        />
      </div>
      <ProductPreviewFeed
        onProductAddedToCart={handleAddToCartClick}
        previews={getProductPreviews()}
      />
      <div className="pt-14 w-full hidden lg:block">
        <Pagination
          currentPage={page}
          pagesAmount={20}
          pagesBarLength={5}
          onPageChanged={onPageChanged}
        />
      </div>
      <div className="pt-14 w-full lg:hidden">
        <Pagination
          currentPage={page}
          pagesAmount={20}
          pagesBarLength={3}
          onPageChanged={onPageChanged}
        />
      </div>
    </div>
  );
}
