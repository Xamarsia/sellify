"use client";

import { useCallback, useContext, useState } from "react";

import {
  CartItem,
  ProductPreview,
} from "@sellify/customer-ui-components/types";

import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";
import Pagination from "@sellify/common-ui-components/pages/Pagination";
import FilterButton from "@sellify/common-ui-components/filter/FilterButton";
import ProductPreviewFeed from "@sellify/customer-ui-components/product-preview/ProductPreviewFeed";

import { FilterPanelContext } from "common/contexts/common-context";
import { ProductAddedDialogContext } from "common/contexts/cart-context";
import { addToCart, getProductPreviews } from "common/actions/cart-actions";
import { FilterPanelController, ProductAddedDialogController } from "types";

type Props = {
  productLabel?: string;
};

export default function ProductFeedContent({ productLabel }: Props) {
  const [page, setPage] = useState<number>(1);
  const [selectedKey, setSelectedKey] = useState<string>();
  const { openFilterPanel } =
    useContext<FilterPanelController>(FilterPanelContext);

  const { openProductAddedDialog } = useContext<ProductAddedDialogController>(
    ProductAddedDialogContext,
  );

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
      <div className="relative flex grow w-full justify-between pb-6">
        <FilterButton onClick={openFilterPanel} />
        <Dropdown
          title={"Sort By"}
          items={comboboxItems}
          selectedKey={selectedKey}
          onKeySelected={setSelectedKey}
        />
      </div>
      <ProductPreviewFeed
        onProductAddedToCart={handleAddToCartClick}
        previews={getProductPreviews(productLabel)}
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
