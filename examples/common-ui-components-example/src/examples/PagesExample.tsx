"use client";

import { useCallback, useState } from "react";

import Pagination from "@sellify/common-ui-components/pages/Pagination";

export default function PagesExample() {
  const [page, setPage] = useState<number>(6);

  const onPageChanged = useCallback((newPage: number): void => {
    setPage(newPage);
  }, []);

  return (
    <Pagination
      currentPage={page}
      pagesAmount={20}
      pagesBarLength={5}
      onPageChanged={onPageChanged}
    />
  );
}
