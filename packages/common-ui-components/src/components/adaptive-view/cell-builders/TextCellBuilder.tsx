import type { ReactNode } from "react";

import type { CellBuilder } from "../AdaptiveCell";

type TextCellBuilderProps = {
  text: string;
};

/**
 * Displays wrapping text in a data-view cell.
 *
 * @param text - Text to display
 */
export const TextCellBuilder = {
  buildView({ text }: TextCellBuilderProps): ReactNode {
    return <p className="text-justify line-clamp-3 break-all">{text}</p>;
  },
} satisfies CellBuilder<TextCellBuilderProps>;
