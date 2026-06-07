import type { Cell } from "../types";

type TableViewProps<T> = {
  cellPrototypes: ReadonlyArray<Cell<T>>;
  data: ReadonlyArray<T>;
};

/**
 * Renders data in a table using shared definitions for headers and cells.
 *
 * Each cell prototype provides a column title and a builder that renders the
 * corresponding value from the complete row object.
 *
 * @typeParam T - Shape of each data row
 * @param cellPrototypes - Definitions used to render headers and row values
 * @param data - Rows rendered in the table body
 */
export default function TableView<T>({
  cellPrototypes,
  data,
}: TableViewProps<T>) {
  return (
    <div className="w-full overflow-x-auto bg-white border border-stroke rounded-lg body shrink-0 scrollbar-horizontal">
      <table className="w-full table-auto text-left">
        <thead className="w-full h-16 border-b border-stroke px-9 py-5">
          <tr>
            {cellPrototypes.map(({ title }, cellIndex) => (
              <th
                className="px-3 lg:px-6 py-5 mx-2"
                key={`table-header-cell-${cellIndex}`}
                scope="col"
              >
                <h3>{title}</h3>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={`table-row-${rowIndex}`}
              className="body min-h-16 hover:bg-combobox-item"
            >
              {cellPrototypes.map(({ viewBuilder }, cellIndex) => (
                <td
                  key={`table-row-${rowIndex}-cell-${cellIndex}`}
                  className="px-3 lg:px-6 py-3 mx-2"
                >
                  {viewBuilder(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
