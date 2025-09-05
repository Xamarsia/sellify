"use client";

import { useCallback, useState } from "react";

import ProductPreviewFeed from "@sellify/customer-ui-components/product-preview/ProductPreviewFeed";
import AddedToCartDialog from "@sellify/customer-ui-components/cart/dialog/AddedToCartDialog";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";
import Pagination from "@sellify/common-ui-components/pages/Pagination";
import { getProductPreviews } from "../actions/cart-actions";

export default function Home() {
  const [cartDialogOpened, setCartDialogOpened] = useState<boolean>(false);
  const [selectedKey, setSelectedKey] = useState<string>();
  const [isExtended, setIsExtended] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const onItemSelected = useCallback((key: string,) => {
    setSelectedKey(key);
    setIsExtended(false);
  }, []);

  const onCartDialogCloseClicked = useCallback((): void => {
    setCartDialogOpened(false);
  }, []);

  const onPageChanged = useCallback((newPage: number): void => {
    setPage(newPage);
    // router.push(`/page=${newPage}`);
  }, []);

  const comboboxItems = new Map<string, string>([
    ["apple", 'Bestsellers'],
    ["banana", 'Rating'],
    ["apricot", 'Rank by lowest price'],
    ["avocado", 'Rank by highest price'],
  ]);

  const handleAddToCartClick = useCallback((productPreviewId: number): void => {
    console.log("ProductPreviewId: " + productPreviewId)
    setCartDialogOpened(true);
  }, []);

  const handleOnCheckoutClick = useCallback((): void => {

  }, []);


  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full justify-end pb-6">
        <Dropdown
          title={"Sort By"}
          items={comboboxItems}
          selectedKey={selectedKey}
          isExtended={isExtended}
          onItemSelected={onItemSelected}
          setIsExtended={setIsExtended}
        />
      </div>

      <ProductPreviewFeed
        onProductAddedToCart={handleAddToCartClick}
        previews={getProductPreviews()}
      />
      <div className="pt-14 w-full hidden lg:block">
        <Pagination currentPage={page} pagesAmount={20} pagesBarLength={5} onPageChanged={onPageChanged} />
      </div>
      <div className="pt-14 w-full lg:hidden">
        <Pagination currentPage={page} pagesAmount={20} pagesBarLength={3} onPageChanged={onPageChanged} />
      </div>
      
      {/* <AddedToCartDialog dialogOpen={cartDialogOpened} onDialogClose={onCartDialogCloseClicked} cartItem={cartItem} onCheckout={handleOnCheckoutClick} /> */}
    </div>
  );
}
