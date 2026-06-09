import type { ReactNode } from "react";

import type { CellBuilder } from "../AdaptiveCell";
import { formatCurrency } from "../../utils/currency";

type CurrencyCellBuilderProps = {
  amount: number;
};

/**
 * Displays a formatted currency amount in a data-view cell.
 *
 * @param amount - Numeric amount to format as currency
 */
export const CurrencyCellBuilder = {
  buildView({ amount }: CurrencyCellBuilderProps): ReactNode {
    return <span>{formatCurrency(amount)}</span>;
  },
} satisfies CellBuilder<CurrencyCellBuilderProps>;
