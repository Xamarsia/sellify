"use client";

import { ReactNode, useCallback, useState } from "react";

import { CartItem } from "@sellify/customer-ui-components/types";
import CartPanel from "@sellify/customer-ui-components/cart/CartPanel";

import { CartContext } from "types";
import { CartPanelContext } from "common/contexts/cart-context";
import { onRemoveCartItem } from "common/actions/cart-actions";

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
