import { useCallback } from "react";

import PageButton from "./PageButton";

type PageItemProps = {
  pageNumber: number;
  selected?: boolean;
  onPageSelected?: (page: number) => void;
};

export default function PageItem({
  pageNumber,
  selected,
  onPageSelected,
}: PageItemProps) {
  const handlePageChange = useCallback((): void => {
    if (!selected && onPageSelected) {
      onPageSelected(pageNumber);
    }
  }, [selected, onPageSelected]);

  return (
    <PageButton
      text={pageNumber.toString()}
      onPageSelected={handlePageChange}
      selected={selected}
    />
  );
}
