import type { ReactNode } from "react";

import type { CellBuilder } from "../AdaptiveCell";

type NumberCellBuilderProps = {
  value: number;
};

/**
 * Displays a numeric value in a data-view cell.
 *
 * @param value - Number to display
 */
export const NumberCellBuilder = {
  buildView({ value }: NumberCellBuilderProps): ReactNode {
    return <span>{value}</span>;
  },
} satisfies CellBuilder<NumberCellBuilderProps>;
