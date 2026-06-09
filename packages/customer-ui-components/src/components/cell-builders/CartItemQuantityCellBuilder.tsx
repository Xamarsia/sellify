import type { ReactNode } from "react";

import type { CellBuilder } from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";

import CartItemQuantitySelector from "../cart/CartItemQuantitySelector";
import type { CartItem } from "../../types";

type CartItemQuantityCellBuilderProps = {
  cartItem: CartItem;
  getProductMaxQuantity: (productId: number) => number;
  onCartItemQuantityChanged: (cartItemId: number, quantity: number) => void;
};

/**
 * Displays a cart-item quantity selector in a data-view cell.
 *
 * @param cartItem - Cart item controlled by the selector
 * @param getProductMaxQuantity - Returns the available quantity for a product
 * @param onCartItemQuantityChanged - Handles submitted quantity changes
 */
export const CartItemQuantityCellBuilder = {
  buildView({
    cartItem,
    getProductMaxQuantity,
    onCartItemQuantityChanged,
  }: CartItemQuantityCellBuilderProps): ReactNode {
    return (
      <CartItemQuantitySelector
        cartItem={cartItem}
        getProductMaxQuantity={getProductMaxQuantity}
        onCartItemQuantityChanged={onCartItemQuantityChanged}
      />
    );
  },
} satisfies CellBuilder<CartItemQuantityCellBuilderProps>;
