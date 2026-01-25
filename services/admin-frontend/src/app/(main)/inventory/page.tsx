"use client";

import { useCallback, useContext, useState } from "react";

import FireIcon from "@sellify/common-icons/fire";

import Button from "@sellify/common-ui-components/buttons/Button";

import { InventoryProduct } from "@sellify/admin-ui-components/types";
import InventoryView from "@sellify/admin-ui-components/data-view/InventoryView";

import {
  getInventoryProducts,
  setProductQuantity,
} from "actions/inventory-actions";
import PageTitle from "components/PageTitle";
import { AlertDialogContent, AlertDialogController } from "types";
import { AlertDialogContext } from "contexts/common-context";
import Filter from "components/Filter";
import { InventoryFilterSections } from "filter-sections/inventory-filter";

export default function InventoryPage() {
  const defaultProducts: Array<InventoryProduct> = getInventoryProducts();
  const [inventoryProducts, setInventoryProducts] =
    useState<Array<InventoryProduct>>(defaultProducts);
  const { showAlertDialog, closeAlertDialog } =
    useContext<AlertDialogController>(AlertDialogContext);

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

  return (
    <>
      <PageTitle />
      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-end">
          <Filter filterSections={InventoryFilterSections} />
        </div>
        <InventoryView
          content={inventoryProducts}
          onSubmit={openAddQuantityAlertDialog}
        />
      </div>
    </>
  );
}
