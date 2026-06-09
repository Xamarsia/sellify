import type { ReactNode } from "react";

import type { CellBuilder } from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";

import AddAmountButtonTableItem from "../data-view/AddAmountButtonTableItem";

type AddAmountButtonCellBuilderProps = {
  productId: number;
  onSubmit: (productId: number, quantity: number) => void;
  disabled?: boolean;
};

/**
 * Displays an inventory quantity action in a data-view cell.
 *
 * @param productId - Product updated by the action
 * @param onSubmit - Callback receiving the product and submitted quantity
 * @param disabled - Whether the action is disabled
 */
export const AddAmountButtonCellBuilder = {
  buildView({
    productId,
    onSubmit,
    disabled,
  }: AddAmountButtonCellBuilderProps): ReactNode {
    return (
      <AddAmountButtonTableItem
        productId={productId}
        onSubmit={onSubmit}
        disabled={disabled}
      />
    );
  },
} satisfies CellBuilder<AddAmountButtonCellBuilderProps>;
