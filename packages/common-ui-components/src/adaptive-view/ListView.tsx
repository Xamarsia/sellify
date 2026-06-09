import type { CellPrototype } from "./AdaptiveCell";

type ListViewProps<T> = {
  cellPrototypes: ReadonlyArray<CellPrototype<T>>;
  data: ReadonlyArray<T>;
};

/**
 * Renders data as a stacked list of label-value pairs.
 *
 * Each data row becomes one list item. Every cell prototype becomes a
 * label-value pair inside that item.
 *
 * @typeParam T - Shape of each data row
 * @param cellPrototypes - Definitions used to render labels and row values
 * @param data - Complete rows rendered as list items
 */
export default function ListView<T>({
  cellPrototypes,
  data,
}: ListViewProps<T>) {
  return (
    <ul className="flex flex-col w-full divide-y divide-stroke border border-stroke rounded-lg overflow-hidden">
      {data.map((row, rowIndex) => (
        <li
          key={`list-row-${rowIndex}`}
          className="flex flex-col hover:bg-combobox-item px-4 py-6 gap-4"
        >
          {cellPrototypes.map(({ title, buildView }, cellIndex) => (
            <div
              key={`list-row-${rowIndex}-cell-${cellIndex}`}
              className="flex flex-row justify-between gap-14"
            >
              <h4>{title}</h4>
              {buildView(row)}
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
}
