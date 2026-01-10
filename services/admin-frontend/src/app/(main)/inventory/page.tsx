"use client";

import { ChangeEvent, useCallback, useContext, useState } from "react";

import FireIcon from "@sellify/common-icons/fire";

import SearchInput from "@sellify/common-ui-components/input/SearchInput";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";
import Button from "@sellify/common-ui-components/buttons/Button";

import { Inventory } from "@sellify/admin-ui-components/types";
import InventoryView from "@sellify/admin-ui-components/data-view/InventoryView";

import {
  filterInventoryProducts,
  getInventoryProducts,
  setProductQuantity,
} from "common/actions/inventory-actions";
import PageTitle from "components/PageTitle";
import { AlertDialogContent, AlertDialogController } from "types";
import { AlertDialogContext } from "common/contexts/common-context";

export default function InventoryPage() {
  const defaultProducts: Array<Inventory> = getInventoryProducts();
  const [query, setQuery] = useState<string>("");
  const [sortByKey, setSortByKey] = useState<string>();
  const [inventoryProducts, setInventoryProducts] =
    useState<Array<Inventory>>(defaultProducts);
  const { showAlertDialog, closeAlertDialog } =
    useContext<AlertDialogController>(AlertDialogContext);

  const comboboxSortItems = new Map<string, string>([
    ["byLowestAmount", "Rank by lowest amount"],
    ["byHighestAmount", "Rank by highest amount"],
  ]);

  const openAddQuantityAlertDialog = useCallback(
    (productId: number, quantity: number): void => {
      const alertDialogContent: AlertDialogContent = {
        icon: <FireIcon />,
        title: "Inventory change!",
        description: `Are you certain you'd like to add ${quantity} to product #${productId}?`,
        controlPanel: (
          <>
            <Button variant="outline" fill="parent" onClick={closeAlertDialog}>
              Cancel
            </Button>
            <Button
              fill="parent"
              onClick={() => setProductQuantity(productId, quantity)}
            >
              Add Quantity
            </Button>
          </>
        ),
      };
      showAlertDialog(alertDialogContent);
    },
    [showAlertDialog, closeAlertDialog, setProductQuantity],
  );

  const onSearchChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const query: string = e.target.value;
      setQuery(query);
      setInventoryProducts(
        query ? filterInventoryProducts(query) : defaultProducts,
      );
    },
    [],
  );

  return (
    <>
      <PageTitle />
      <div className="flex flex-col w-full gap-4">
        <div className="relative flex w-full justify-between items-start gap-4">
          <SearchInput value={query} onChange={onSearchChanged} />
          <Dropdown
            title={"sort by"}
            items={comboboxSortItems}
            selectedKey={sortByKey}
            onKeySelected={setSortByKey}
          />
        </div>
        <InventoryView
          content={inventoryProducts}
          onSubmit={openAddQuantityAlertDialog}
        />
      </div>
    </>
  );
}
