import { ReactNode } from "react";

import ListView from "./ListView";
import TableView from "./TableView";
import Pagination from "../pages/Pagination";

type AdaptiveDataViewProps = {
  head: Array<string>;
  content: Array<Array<ReactNode>>;
  pagesAmount: number;
  currentPage?: number;
  onPageChanged: (page: number) => void;
};

export default function AdaptiveDataView({
  head,
  content,
  currentPage,
  pagesAmount,
  onPageChanged,
}: AdaptiveDataViewProps) {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="not-sm:hidden">
        <TableView head={head} content={content} />
      </div>

      <div className="sm:hidden">
        <ListView head={head} content={content} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={pagesAmount}
        onPageChange={onPageChanged}
      />
    </div>
  );
}
