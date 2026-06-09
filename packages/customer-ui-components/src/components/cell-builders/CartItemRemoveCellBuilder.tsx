import type { ReactNode } from "react";

import type { CellBuilder } from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";

import CartItemRemoveButton from "../cart/CartItemRemoveButton";

type CartItemRemoveCellBuilderProps = {
  cartItemId: number;
  onCartItemRemove: (cartItemId: number) => void;
};

/**
 * Displays a cart-item removal action in a data-view cell.
 *
 * @param cartItemId - Cart item removed by the action
 * @param onCartItemRemove - Handles the removal request
 */
export const CartItemRemoveCellBuilder = {
  buildView({
    cartItemId,
    onCartItemRemove,
  }: CartItemRemoveCellBuilderProps): ReactNode {
    return (
      <div className="flex w-full justify-end sm:justify-center">
        <CartItemRemoveButton
          cartItemId={cartItemId}
          onCartItemRemove={onCartItemRemove}
        />
      </div>
    );
  },
} satisfies CellBuilder<CartItemRemoveCellBuilderProps>;
