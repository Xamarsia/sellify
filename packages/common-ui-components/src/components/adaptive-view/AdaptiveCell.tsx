import type { ReactNode } from "react";

/**
 * Builds cell content from a focused props object.
 *
 * @typeParam Props - Focused input required to render the cell
 */
export interface CellBuilder<Props> {
  buildView: (props: Props) => ReactNode;
}

/**
 * Describes a titled cell that can render one row.
 *
 * @typeParam RowData - Shape of each data row
 */
export interface CellPrototype<RowData> {
  /** Title displayed for the cell. */
  readonly title: string;
  /** Renders the cell value from a complete row. */
  buildView: (row: RowData) => ReactNode;
}

/**
 * Adapts row data into the focused props expected by a cell builder.
 *
 * @typeParam RowData - Shape of each data row
 * @typeParam CellBuilderProps - Focused props accepted by the cell builder
 * @param title - Table header and list label displayed for the cell
 * @param cellBuilder - Reusable renderer for the cell content
 * @param dataAdapter - Selects and shapes builder props from a complete row
 * @returns A cell prototype that can render the supplied row type
 */
export function createCellPrototype<RowData, CellBuilderProps>(
  title: string,
  cellBuilder: CellBuilder<CellBuilderProps>,
  dataAdapter: (row: RowData) => CellBuilderProps,
): CellPrototype<RowData> {
  return {
    title,
    buildView: (row) => cellBuilder.buildView(dataAdapter(row)),
  };
}
