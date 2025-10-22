import { useCallback } from "react";

import PageButton from "./PageButton";

type PageButtonProps = {
  pageNumber: number;
  selected?: boolean;
  onPageSelected: (page: number) => void;
};

export default function PageItem({
  pageNumber,
  selected,
  onPageSelected,
}: PageButtonProps) {
  const handlePageChange = useCallback((): void => {
    if (!selected) {
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
