import { ReactNode, useCallback, useMemo } from "react";

import ChevronRightMiniIcon from "@sellify/common-icons/chevron-right-mini";
import ChevronLeftMiniIcon from "@sellify/common-icons/chevron-left-mini";

import TransparentIconButton from "../buttons/TransparentIconButton";
import PaginationButton from "./PaginationButton";

const MIN_VISIBLE_PAGE_COUNT = 7;
const BACKWARD_GAP_SENTINEL = -1;
const FORWARD_GAP_SENTINEL = -2;

type PaginationProps = {
  totalPages: number; // The component is hidden when fewer than 1 page is available.
  currentPage?: number;
  barLength?: number; // Should be greater than 7; otherwise, the minimum value of 7 is used.
  onPageChange: (page: number) => void;
};

/**
 * Renders a pagination control for navigating between pages.
 * Shows page buttons, previous and next controls, and collapsed page ranges when needed.
 * @param totalPages - Total number of available pages. Values are clamped to the range 1..1000.
 * @param currentPage - Currently selected page. Values are clamped to the range 1..totalPages.
 * @param barLength - Number of page buttons shown in the pagination bar.
 * This count excludes the previous and next controls.
 * @param onPageChange - Called when the selected page changes.
 */
export default function Pagination({
  totalPages,
  currentPage = 1,
  barLength = 7,
  onPageChange: onPageChange,
}: PaginationProps) {
  const visiblePageCount = Math.max(MIN_VISIBLE_PAGE_COUNT, barLength);
  const halfOfVisiblePageCount = Math.floor(visiblePageCount / 2);

  const safeTotalPages = Number.isFinite(totalPages) ? totalPages : 1;
  const clampedTotalPages = Math.min(1000, Math.max(1, safeTotalPages));

  const safeCurrentPage = Number.isFinite(currentPage) ? currentPage : 1;
  const clampedCurrentPage = Math.min(
    clampedTotalPages,
    Math.max(1, safeCurrentPage),
  );

  const createPageButton = useCallback(
    (page: number): ReactNode => (
      <PaginationButton
        key={page}
        label={page}
        value={page}
        onClick={() => onPageChange(page)}
        isSelected={page === clampedCurrentPage}
      />
    ),
    [clampedCurrentPage, onPageChange],
  );

  const getPreviousPage = useCallback((): void => {
    onPageChange(clampedCurrentPage - 1);
  }, [clampedCurrentPage, onPageChange]);

  const getNextPage = useCallback((): void => {
    onPageChange(clampedCurrentPage + 1);
  }, [clampedCurrentPage, onPageChange]);

  const fastRewindPages = useCallback((): void => {
    onPageChange(clampedCurrentPage - halfOfVisiblePageCount);
  }, [clampedCurrentPage, onPageChange, halfOfVisiblePageCount]);

  const fastForwardPages = useCallback((): void => {
    onPageChange(clampedCurrentPage + halfOfVisiblePageCount);
  }, [clampedCurrentPage, onPageChange, halfOfVisiblePageCount]);

  const visiblePages = useMemo<number[]>(() => {
    const shouldCollapsePages = clampedTotalPages > visiblePageCount;
    const renderedPageCount = Math.min(clampedTotalPages, visiblePageCount);

    const firstVisiblePage =
      !shouldCollapsePages || clampedCurrentPage <= halfOfVisiblePageCount
        ? 1
        : clampedCurrentPage > clampedTotalPages - halfOfVisiblePageCount
          ? clampedTotalPages - renderedPageCount + 1
          : clampedCurrentPage - halfOfVisiblePageCount;

    const visiblePages = Array.from(
      { length: renderedPageCount },
      (_, index) => firstVisiblePage + index,
    );

    if (!shouldCollapsePages) {
      return visiblePages;
    }

    const firstVisiblePageIndex = 0;
    const secondVisiblePageIndex = 1;
    const lastVisiblePageIndex = visiblePages.length - 1;
    const penultimateVisiblePageIndex = visiblePages.length - 2;

    // Always pin the visible range to the first and last page.
    visiblePages[firstVisiblePageIndex] = 1;
    visiblePages[lastVisiblePageIndex] = clampedTotalPages;

    // Replace the second slot with a leading gap marker when page 2 falls outside the visible window.
    const secondVisiblePage = visiblePages[secondVisiblePageIndex];
    if (secondVisiblePage && secondVisiblePage > 2) {
      visiblePages[secondVisiblePageIndex] = BACKWARD_GAP_SENTINEL;
    }

    // Replace the penultimate slot with a trailing gap marker when the final pages are collapsed.
    const secondToLastVisiblePage = visiblePages[penultimateVisiblePageIndex];
    if (
      secondToLastVisiblePage &&
      secondToLastVisiblePage < clampedTotalPages - 1
    ) {
      visiblePages[penultimateVisiblePageIndex] = FORWARD_GAP_SENTINEL;
    }

    return visiblePages;
  }, [
    clampedCurrentPage,
    halfOfVisiblePageCount,
    clampedTotalPages,
    visiblePageCount,
  ]);

  const pages = useMemo<Array<ReactNode>>(
    () =>
      visiblePages.map((page) => {
        if (page === BACKWARD_GAP_SENTINEL) {
          return (
            <PaginationButton
              key="rewind"
              label="..."
              onClick={fastRewindPages}
            />
          );
        }

        if (page === FORWARD_GAP_SENTINEL) {
          return (
            <PaginationButton
              key="forward"
              label="..."
              onClick={fastForwardPages}
            />
          );
        }

        return createPageButton(page);
      }),
    [visiblePages, createPageButton, fastRewindPages, fastForwardPages],
  );

  return (
    clampedTotalPages > 0 && (
      <nav className="flex items-center justify-center gap-6">
        <TransparentIconButton
          disabled={clampedCurrentPage <= 1}
          onClick={getPreviousPage}
          icon={<ChevronLeftMiniIcon />}
          size="sm"
        />

        <nav className="flex flex-row gap-2">{pages}</nav>

        <TransparentIconButton
          disabled={clampedCurrentPage >= clampedTotalPages}
          onClick={getNextPage}
          icon={<ChevronRightMiniIcon />}
          size="sm"
        />
      </nav>
    )
  );
}
