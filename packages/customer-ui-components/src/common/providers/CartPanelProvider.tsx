"use client";

import { ReactNode, useCallback, useState } from "react";
import { CartPanelContext } from "../contexts/cart-context";
import CartPanel from "../../cart/CartPanel";

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
