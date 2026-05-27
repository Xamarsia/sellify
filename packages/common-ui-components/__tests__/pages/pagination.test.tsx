import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import Pagination from "@sellify/common-ui-components/pages/Pagination";

type PaginationProps = ComponentProps<typeof Pagination>;
type RerenderFn = (ui: ReactElement) => void;
type PaginationLayoutScenario = {
  barLength?: number;
  currentPage: number;
  totalPages: number;
  expectedVisiblePages: Array<number>;
  expectedOmittedPages: Array<number>;
  expectedJumpButtonCount: number;
};

const LEADING_JUMP_LAYOUT_SCENARIOS: Array<PaginationLayoutScenario> = [
  {
    barLength: 7,
    totalPages: 8,
    currentPage: 4,
    expectedVisiblePages: [1, 2, 3, 4, 5, 8],
    expectedOmittedPages: [6, 7],
    expectedJumpButtonCount: 1,
  },
  {
    barLength: 8,
    totalPages: 9,
    currentPage: 5,
    expectedVisiblePages: [1, 2, 3, 4, 5, 6, 9],
    expectedOmittedPages: [7, 8],
    expectedJumpButtonCount: 1,
  },
];

const TRAILING_JUMP_LAYOUT_SCENARIOS: Array<PaginationLayoutScenario> = [
  {
    barLength: 7,
    totalPages: 8,
    currentPage: 5,
    expectedVisiblePages: [1, 4, 5, 6, 7, 8],
    expectedOmittedPages: [2, 3],
    expectedJumpButtonCount: 1,
  },
  {
    barLength: 8,
    totalPages: 9,
    currentPage: 6,
    expectedVisiblePages: [1, 4, 5, 6, 7, 8, 9],
    expectedOmittedPages: [2, 3],
    expectedJumpButtonCount: 1,
  },
];

const BOTH_SIDE_JUMP_LAYOUT_SCENARIOS: Array<PaginationLayoutScenario> = [
  {
    barLength: 7,
    totalPages: 9,
    currentPage: 5,
    expectedVisiblePages: [1, 4, 5, 6, 9],
    expectedOmittedPages: [2, 3, 7, 8],
    expectedJumpButtonCount: 2,
  },
  {
    barLength: 7,
    totalPages: 10,
    currentPage: 6,
    expectedVisiblePages: [1, 5, 6, 7, 10],
    expectedOmittedPages: [2, 3, 4, 8, 9],
    expectedJumpButtonCount: 2,
  },
  {
    barLength: 8,
    totalPages: 10,
    currentPage: 6,
    expectedVisiblePages: [1, 4, 5, 6, 7, 10],
    expectedOmittedPages: [2, 3, 8, 9],
    expectedJumpButtonCount: 2,
  },
];

describe("Pagination", () => {
  const getPageButtonByLabel = (pageLabel: string) =>
    screen.getByRole("button", { name: pageLabel }) as HTMLButtonElement;

  const queryPageButtonByLabel = (pageLabel: string) =>
    screen.queryByRole("button", { name: pageLabel });

  const getJumpButtons = (): Array<HTMLButtonElement> =>
    screen
      .queryAllByRole("button")
      .filter(
        (button) => button.textContent === "...",
      ) as Array<HTMLButtonElement>;

  const expectPagesToBeVisible = (pageNumbers: Array<number>) => {
    pageNumbers.forEach((pageNumber) => {
      expect(getPageButtonByLabel(pageNumber.toString())).toBeVisible();
    });
  };

  const expectPagesNotToBeRendered = (pageNumbers: Array<number>) => {
    pageNumbers.forEach((pageNumber) => {
      expect(
        queryPageButtonByLabel(pageNumber.toString()),
      ).not.toBeInTheDocument();
    });
  };

  const renderPagination = (props: Partial<PaginationProps> = {}) => {
    const onPageChangeMock = props.onPageChange ?? jest.fn();

    const view = render(
      <Pagination
        totalPages={props.totalPages ?? 10}
        onPageChange={onPageChangeMock}
        {...props}
      />,
    );

    return {
      ...view,
      onPageChangeMock,
    };
  };

  const rerenderPagination = (
    rerender: RerenderFn,
    props: Partial<PaginationProps> = {},
  ) => {
    const onPageChangeMock = props.onPageChange ?? jest.fn();

    rerender(
      <Pagination
        totalPages={props.totalPages ?? 10}
        onPageChange={onPageChangeMock}
        {...props}
      />,
    );
  };

  const getNavigationButtons = (container: HTMLElement) => {
    const navigationButtons = Array.from(
      container.querySelectorAll("button"),
    ).filter(
      (button) => button.firstElementChild instanceof SVGSVGElement,
    ) as Array<HTMLButtonElement>;

    return {
      previousButton: navigationButtons.at(0) as HTMLButtonElement,
      nextButton: navigationButtons.at(-1) as HTMLButtonElement,
    };
  };

  const getVisiblePageButtonCount = (container: HTMLElement) => {
    const allButtonCount = container.querySelectorAll("button").length;
    const navigationButtonCount = 2;
    return allButtonCount ? allButtonCount - navigationButtonCount : 0;
  };

  const expectLayoutToMatch = ({
    expectedVisiblePages,
    expectedOmittedPages,
    expectedJumpButtonCount,
  }: Pick<
    PaginationLayoutScenario,
    "expectedVisiblePages" | "expectedOmittedPages" | "expectedJumpButtonCount"
  >) => {
    expectPagesToBeVisible(expectedVisiblePages);
    expectPagesNotToBeRendered(expectedOmittedPages);
    expect(getJumpButtons()).toHaveLength(expectedJumpButtonCount);
  };

  describe("rendering", () => {
    it("falls back to a single page when totalPages is not a finite number", () => {
      const { container } = renderPagination({
        totalPages: Number.NaN,
      });

      expect(getVisiblePageButtonCount(container)).toBe(1);
      expectPagesToBeVisible([1]);
      expect(getJumpButtons()).toHaveLength(0);
    });

    it("caps the total page count at one thousand", () => {
      renderPagination({
        totalPages: 1001,
        currentPage: 1001,
      });

      expect(getPageButtonByLabel("1000")).toBeDisabled();
      expect(queryPageButtonByLabel("1001")).not.toBeInTheDocument();
    });

    it("renders a single page when only one page is available", () => {
      const { container } = renderPagination({
        totalPages: 1,
      });

      expectPagesToBeVisible([1]);

      expect(getVisiblePageButtonCount(container)).toBe(1);
      expect(getJumpButtons()).toHaveLength(0);
    });

    it("renders distinct icons for the previous and next navigation buttons", () => {
      const { container } = renderPagination({
        totalPages: 1,
      });

      const { previousButton, nextButton } = getNavigationButtons(container);

      const previousIcon = previousButton.firstElementChild;
      const nextIcon = nextButton.firstElementChild;

      [previousIcon, nextIcon].forEach((icon) => {
        expect(icon).toBeInstanceOf(SVGSVGElement);
        expect(icon).toBeVisible();
      });

      expect(previousIcon).not.toBe(nextIcon);
    });

    it("renders all pages when the total exceeds the default visible range by one", () => {
      const { container } = renderPagination({
        totalPages: 6,
      });

      expect(getVisiblePageButtonCount(container)).toBe(6);
      expectPagesToBeVisible([1, 2, 3, 4, 5, 6]);
      expect(getJumpButtons()).toHaveLength(0);
    });

    it("renders all pages when the total matches the minimum visible page count", () => {
      const { container } = renderPagination({
        totalPages: 7,
      });

      expect(getVisiblePageButtonCount(container)).toBe(7);
      expectPagesToBeVisible([1, 2, 3, 4, 5, 6, 7]);
      expect(getJumpButtons()).toHaveLength(0);
    });

    it("enforces a minimum visible page count of seven when barLength is smaller", () => {
      const { container } = renderPagination({
        totalPages: 7,
        barLength: 5,
      });

      expect(getVisiblePageButtonCount(container)).toBe(7);
      expectPagesToBeVisible([1, 2, 3, 4, 5, 6, 7]);
      expect(getJumpButtons()).toHaveLength(0);
    });

    it("falls back to the first page when currentPage is not a finite number", () => {
      renderPagination({
        totalPages: 8,
        currentPage: Number.NaN,
      });

      expect(getPageButtonByLabel("1")).toBeDisabled();
      expect(getPageButtonByLabel("2")).toBeVisible();
    });

    it("clamps currentPage to the last available page when it exceeds totalPages", () => {
      const { container } = renderPagination({
        totalPages: 8,
        currentPage: 20,
      });

      const { nextButton } = getNavigationButtons(container);

      expect(getPageButtonByLabel("8")).toBeDisabled();
      expect(nextButton).toBeDisabled();
    });

    it("keeps the visible range coherent while moving forward through the pages", () => {
      const { rerender } = renderPagination({
        totalPages: 8,
        currentPage: 1,
      });

      for (let page = 2; page < 8; page++) {
        expect(getPageButtonByLabel(page.toString())).toBeVisible();

        rerenderPagination(rerender, {
          totalPages: 8,
          currentPage: page,
        });
      }
    });

    it("keeps the visible range coherent while moving backward through the pages", () => {
      const { rerender } = renderPagination({
        totalPages: 8,
        currentPage: 8,
      });

      for (let page = 7; page > 1; page--) {
        expect(getPageButtonByLabel(page.toString())).toBeVisible();

        rerenderPagination(rerender, {
          totalPages: 8,
          currentPage: page,
        });
      }
    });
  });

  describe("navigation buttons", () => {
    it("disables both navigation buttons when only one page is available", () => {
      const { container } = renderPagination({
        totalPages: 1,
      });
      const { previousButton, nextButton } = getNavigationButtons(container);

      expect(previousButton).toBeDisabled();
      expect(nextButton).toBeDisabled();
    });

    it("disables the previous button on the first page", () => {
      const { container } = renderPagination({
        totalPages: 2,
        currentPage: 1,
      });
      const { previousButton, nextButton } = getNavigationButtons(container);

      expect(previousButton).toBeDisabled();
      expect(nextButton).toBeEnabled();
    });

    it("disables the next button on the last page", () => {
      const { container } = renderPagination({
        totalPages: 2,
        currentPage: 2,
      });
      const { previousButton, nextButton } = getNavigationButtons(container);

      expect(previousButton).toBeEnabled();
      expect(nextButton).toBeDisabled();
    });

    describe("click handling", () => {
      it.each([
        { current: 2, total: 2, previous: 1 },
        { current: 5, total: 5, previous: 4 },
        { current: 3, total: 5, previous: 2 },
        { current: 10, total: 20, previous: 9 },
      ])(
        "requests page $previous when the previous button is clicked from page $current of $total",
        async ({ current, total, previous }) => {
          const user = userEvent.setup();
          const { container, onPageChangeMock } = renderPagination({
            currentPage: current,
            totalPages: total,
          });

          const { previousButton } = getNavigationButtons(container);
          await user.click(previousButton);

          expect(onPageChangeMock).toHaveBeenCalledTimes(1);
          expect(onPageChangeMock).toHaveBeenCalledWith(previous);
        },
      );

      it.each([
        { current: 1, total: 2, next: 2 },
        { current: 4, total: 5, next: 5 },
        { current: 3, total: 5, next: 4 },
        { current: 10, total: 20, next: 11 },
      ])(
        "requests page $next when the next button is clicked from page $current of $total",
        async ({ current, total, next }) => {
          const user = userEvent.setup();
          const { container, onPageChangeMock } = renderPagination({
            currentPage: current,
            totalPages: total,
          });

          const { nextButton } = getNavigationButtons(container);
          await user.click(nextButton);

          expect(onPageChangeMock).toHaveBeenCalledTimes(1);
          expect(onPageChangeMock).toHaveBeenCalledWith(next);
        },
      );
    });
  });

  describe("jump buttons", () => {
    describe("rendering", () => {
      it("keeps page 2 visible instead of rendering a leading jump button", () => {
        renderPagination({
          totalPages: 8,
          currentPage: 4,
        });

        expectPagesToBeVisible([1, 2, 3, 4, 5, 8]);
        expectPagesNotToBeRendered([6, 7]);
        expect(getJumpButtons()).toHaveLength(1);
      });

      it("keeps the penultimate page visible instead of rendering a trailing jump button", () => {
        renderPagination({
          totalPages: 8,
          currentPage: 5,
        });

        expectPagesToBeVisible([1, 4, 5, 6, 7, 8]);
        expectPagesNotToBeRendered([2, 3]);
        expect(getJumpButtons()).toHaveLength(1);
      });

      it.each(LEADING_JUMP_LAYOUT_SCENARIOS)(
        "renders a trailing jump button near the beginning for page $currentPage of $totalPages with barLength $barLength",
        ({ totalPages, currentPage, barLength, ...expectedLayout }) => {
          renderPagination({
            totalPages,
            currentPage,
            barLength,
          });

          expectLayoutToMatch(expectedLayout);
        },
      );

      it.each(TRAILING_JUMP_LAYOUT_SCENARIOS)(
        "renders a leading jump button near the end for page $currentPage of $totalPages with barLength $barLength",
        ({ totalPages, currentPage, barLength, ...expectedLayout }) => {
          renderPagination({
            totalPages,
            currentPage,
            barLength,
          });

          expectLayoutToMatch(expectedLayout);
        },
      );

      it.each(BOTH_SIDE_JUMP_LAYOUT_SCENARIOS)(
        "renders jump buttons on both sides for page $currentPage of $totalPages with barLength $barLength",
        ({ totalPages, currentPage, barLength, ...expectedLayout }) => {
          renderPagination({
            totalPages,
            currentPage,
            barLength,
          });

          expectLayoutToMatch(expectedLayout);
        },
      );
    });

    describe("click handling", () => {
      it("jumps backward by half of the visible page count", async () => {
        const user = userEvent.setup();

        const { onPageChangeMock } = renderPagination({
          totalPages: 12,
          currentPage: 6,
        });

        await user.click(getJumpButtons()[0] as HTMLButtonElement);

        expect(onPageChangeMock).toHaveBeenCalledTimes(1);
        expect(onPageChangeMock).toHaveBeenCalledWith(3);
      });

      it("jumps forward by half of the visible page count", async () => {
        const user = userEvent.setup();

        const { onPageChangeMock } = renderPagination({
          totalPages: 12,
          currentPage: 6,
        });

        await user.click(getJumpButtons()[1] as HTMLButtonElement);

        expect(onPageChangeMock).toHaveBeenCalledTimes(1);
        expect(onPageChangeMock).toHaveBeenCalledWith(9);
      });
    });
  });

  describe("page selection", () => {
    it("calls onPageChange when a different page is clicked", async () => {
      const user = userEvent.setup();

      const { onPageChangeMock } = renderPagination({
        totalPages: 2,
        currentPage: 1,
      });

      await user.click(getPageButtonByLabel("2"));

      expect(onPageChangeMock).toHaveBeenCalledTimes(1);
      expect(onPageChangeMock).toHaveBeenCalledWith(2);
    });

    it("does not call onPageChange when the current page is clicked", async () => {
      const user = userEvent.setup();

      const { onPageChangeMock } = renderPagination({
        totalPages: 1,
        currentPage: 1,
      });

      await user.click(getPageButtonByLabel("1"));

      expect(onPageChangeMock).not.toHaveBeenCalled();
    });

    it("updates the selected page after rerendering", () => {
      const { rerender } = renderPagination({
        totalPages: 2,
        currentPage: 1,
      });

      expect(getPageButtonByLabel("1")).toBeDisabled();

      rerenderPagination(rerender, {
        totalPages: 2,
        currentPage: 2,
      });

      expect(getPageButtonByLabel("1")).not.toBeDisabled();
      expect(getPageButtonByLabel("2")).toBeDisabled();
    });
  });
});
