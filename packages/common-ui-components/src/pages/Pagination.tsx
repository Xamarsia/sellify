import { useCallback, useMemo } from "react";

import ChevronRightMini from "@sellify/common-icons/chevron-right-mini";
import ChevronLeftMini from "@sellify/common-icons/chevron-left-mini";

import TransparentIconButton from "../buttons/TransparentIconButton";
import PageButton from "./PageButton";
import PageItem from "./PageItem";

type Props = {
  pagesAmount: number;
  currentPage: number;
  pagesBarLength?: number;
  onPageChanged: (page: number) => void;
};

export default function Pagination({
  pagesAmount,
  currentPage,
  pagesBarLength: navBarLength = 5,
  onPageChanged,
}: Props) {
  const pagesBarHalfLength = Math.floor(navBarLength / 2);

  const currentPagesArray = useMemo((): Array<number> => {
    if (pagesAmount <= navBarLength) {
      return Array.from({ length: pagesAmount }, (_v, i) => i + 1);
    }
    if (currentPage <= navBarLength) {
      const contentMaxValue = navBarLength + 2;
      return Array.from(
        {
          length:
            pagesAmount > contentMaxValue ? contentMaxValue : navBarLength,
        },
        (_v, i) => 1 + i,
      );
    }
    if (currentPage > pagesAmount - navBarLength) {
      const contentMaxValue = navBarLength + 2;
      const minPageValue = pagesAmount - navBarLength - 1;
      return Array.from(
        {
          length:
            pagesAmount > contentMaxValue ? contentMaxValue : navBarLength,
        },
        (_v, i) => minPageValue + i,
      );
    }
    const minPage = currentPage - pagesBarHalfLength;
    return Array.from({ length: navBarLength }, (_v, i) => minPage + i);
  }, [currentPage, pagesAmount, pagesBarHalfLength, navBarLength]);

  const isMinPageVisible = useMemo((): boolean => {
    const minValue: number | undefined = currentPagesArray[0];
    return minValue ? minValue > pagesBarHalfLength : false;
  }, [currentPagesArray, pagesBarHalfLength]);

  const isMaxPageVisible = useMemo((): boolean => {
    const maxValue: number | undefined = currentPagesArray.at(-1);
    return maxValue ? maxValue <= pagesAmount - pagesBarHalfLength : false;
  }, [currentPagesArray, pagesBarHalfLength, pagesAmount]);

  const getPreviousPage = useCallback((): void => {
    onPageChanged(currentPage - 1);
  }, [onPageChanged]);

  const getNextPage = useCallback((): void => {
    onPageChanged(currentPage + 1);
  }, [onPageChanged]);

  const fastForwardPages = useCallback((): void => {
    onPageChanged(currentPage + pagesBarHalfLength);
  }, [onPageChanged]);

  const fastRewindPages = useCallback((): void => {
    onPageChanged(currentPage - pagesBarHalfLength);
  }, [onPageChanged]);

  return (
    <nav className="flex w-full gap-6 items-center justify-center">
      <TransparentIconButton
        disabled={currentPage == 1}
        onClick={getPreviousPage}
      >
        <ChevronLeftMini style="size-5" />
      </TransparentIconButton>

      <nav className="flex flex-row gap-2">
        {isMinPageVisible && (
          <>
            <PageItem key={1} pageNumber={1} onPageSelected={onPageChanged} />
            <PageButton key={0} text="..." onPageSelected={fastRewindPages} />
          </>
        )}

        {currentPagesArray.map((value) => (
          <PageItem
            key={value}
            pageNumber={value}
            onPageSelected={onPageChanged}
            selected={value == currentPage}
          />
        ))}

        {isMaxPageVisible && (
          <>
            <PageButton key={-1} text="..." onPageSelected={fastForwardPages} />
            <PageItem
              key={pagesAmount}
              pageNumber={pagesAmount}
              onPageSelected={onPageChanged}
            />
          </>
        )}
      </nav>

      <TransparentIconButton
        disabled={currentPage == pagesAmount}
        onClick={getNextPage}
      >
        <ChevronRightMini style="size-5" />
      </TransparentIconButton>
    </nav>
  );
}
