import type { CellPrototype } from "./AdaptiveCell";
import ListView from "./ListView";
import TableView from "./TableView";

type AdaptiveDataViewProps<T> = {
  cellPrototypes: ReadonlyArray<CellPrototype<T>>;
  data: ReadonlyArray<T>;
};

/**
 * Renders data using responsive table and list layouts.
 *
 * The table layout is displayed on larger screens, while the stacked list
 * layout is displayed on smaller screens. Both layouts use the same cell
 * definitions and complete row objects.
 *
 * @typeParam T - Shape of each data row
 * @param cellPrototypes - Definitions used to render labels and cells
 * @param data - Rows rendered in both responsive layouts
 */
export default function AdaptiveDataView<T>(props: AdaptiveDataViewProps<T>) {
  return (
    <>
      <div className="not-sm:hidden">
        <TableView {...props} />
      </div>
      <div className="sm:hidden">
        <ListView {...props} />
      </div>
    </>
  );
}
