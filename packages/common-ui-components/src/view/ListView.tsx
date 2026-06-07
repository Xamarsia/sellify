import type { Cell } from "../types";

type ListViewProps<T> = {
  cellPrototypes: ReadonlyArray<Cell<T>>;
  data: ReadonlyArray<T>;
};

/**
 * Renders data as a stacked list of label-value pairs.
 *
 * Each cell prototype provides the displayed label and a builder that renders
 * the corresponding value from the complete row object.
 *
 * @typeParam T - Shape of each data row
 * @param cellPrototypes - Definitions used to render labels and row values
 * @param data - Rows rendered as list items
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
          {cellPrototypes.map(({ title, viewBuilder }, cellIndex) => (
            <div
              key={`list-row-${rowIndex}-cell-${cellIndex}`}
              className="flex flex-row justify-between"
            >
              <h4>{title}</h4>
              {viewBuilder(row)}
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
}
