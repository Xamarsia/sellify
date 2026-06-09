import type { ReactNode } from "react";

import type { CellBuilder } from "../AdaptiveCell";
import { formatID } from "../../../utils/id";

type IdCellBuilderProps = {
  id: string | number;
};

/**
 * Displays a formatted identifier in a data-view cell.
 *
 * @param id - Identifier to format
 */
export const IdCellBuilder = {
  buildView({ id }: IdCellBuilderProps): ReactNode {
    return <span>{formatID(id)}</span>;
  },
} satisfies CellBuilder<IdCellBuilderProps>;
