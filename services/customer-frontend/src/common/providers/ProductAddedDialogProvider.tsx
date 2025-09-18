"use client";

import { ReactNode, useCallback, useState } from "react";

import { CartItem } from "@sellify/customer-ui-components/types";
import ProductAddedDialog from "@sellify/customer-ui-components/cart/dialog/ProductAddedDialog";

import { DialogContext } from "types";
import { ProductAddedDialogContext } from "common/contexts/cart-context";

export default function ProductAddedDialogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [dialogOpened, setDialogOpened] = useState<boolean>(false);
  const [currentCartItem, setCurrentCartItem] = useState<
    CartItem | undefined
  >();

  const onCartDialogCloseClicked = useCallback((): void => {
    setDialogOpened(false);
  }, []);

  // TODO Implement onCheckout
  const onCheckout = useCallback((): void => {}, []);

  const contextValue: DialogContext = {
    openProductAddedDialog: (cartItem) => {
      setDialogOpened(true);
      setCurrentCartItem(cartItem);
    },
  };

  return (
    <ProductAddedDialogContext.Provider value={contextValue}>
      {currentCartItem && (
        <ProductAddedDialog
          dialogOpen={dialogOpened}
          onDialogClose={onCartDialogCloseClicked}
          cartItem={currentCartItem}
          onCheckout={onCheckout}
        />
      )}
      {children}
    </ProductAddedDialogContext.Provider>
  );
}
