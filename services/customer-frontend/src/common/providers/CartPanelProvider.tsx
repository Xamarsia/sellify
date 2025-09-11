"use client";

import { ReactNode, useCallback, useState } from "react";

import CartPanel from "@sellify/customer-ui-components/cart/CartPanel";
import { CartItem } from "@sellify/customer-ui-components/types.ts";

import { CartPanelContext } from "../contexts/cart-context";
import { CartContext } from "../../types";

export default function CartPanelProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartPanelOpened, setCartPanelOpened] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);

  const onCartPanelClose = useCallback((): void => {
    setCartPanelOpened(false);
  }, []);

  const onRemoveCartItem = useCallback((productPreviewId: number): void => {
    //TODO Implement onRemoveCartItem
  }, []);

  const contextValue: CartContext = {
    openCartPanel: (cartItems) => {
      setCartPanelOpened(true);
      setCartItems(cartItems);
    },
  };

  return (
    <CartPanelContext.Provider value={contextValue}>
      <CartPanel
        dialogOpen={cartPanelOpened}
        onDialogClose={onCartPanelClose}
        onItemRemove={onRemoveCartItem}
        cartItems={cartItems}
      />
      {children}
    </CartPanelContext.Provider>
  );
}
