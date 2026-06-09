import type { ReactNode } from "react";

import type { CellBuilder } from "../AdaptiveCell";
import { formatDate } from "../../utils/dateTime";

type DateCellBuilderProps = {
  date: string;
};

/**
 * Displays a formatted date in a data-view cell.
 *
 * @param date - Date value to format
 */
export const DateCellBuilder = {
  buildView({ date }: DateCellBuilderProps): ReactNode {
    return (
      <p className="text-justify line-clamp-3 break-all">{formatDate(date)}</p>
    );
  },
} satisfies CellBuilder<DateCellBuilderProps>;
