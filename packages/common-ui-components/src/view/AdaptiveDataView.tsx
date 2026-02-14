import { ReactNode } from "react";

import ListView from "./ListView";
import TableView from "./TableView";
import Pagination from "../pages/Pagination";

type AdaptiveDataViewProps = {
  head: Array<string>;
  content: Array<Array<ReactNode>>;
  pagesAmount: number;
  currentPage?: number;
  onPageChanged?: (page: number) => void;
};

export default function AdaptiveDataView({
  head,
  content,
  currentPage,
  pagesAmount,
  onPageChanged,
}: AdaptiveDataViewProps) {
  return (
    <>
      <div className="flex flex-col w-full not-sm:hidden gap-6">
        <TableView head={head} content={content} />
        <Pagination
          currentPage={currentPage}
          pagesAmount={pagesAmount}
          onPageChanged={onPageChanged}
          pagesBarLength={5}
        />
      </div>
      <div className="flex flex-col w-full sm:hidden gap-6">
        <ListView head={head} content={content} />
        <Pagination
          currentPage={currentPage}
          pagesAmount={pagesAmount}
          onPageChanged={onPageChanged}
          pagesBarLength={3}
        />
      </div>
    </>
  );
}
