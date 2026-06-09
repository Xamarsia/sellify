import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import SummaryRow from "@sellify/common-ui-components/order-summary/SummaryRow";
import * as currencyUtils from "@sellify/common-ui-components/utils/currency";

type SummaryRowProps = ComponentProps<typeof SummaryRow>;
type SummaryRowElements = {
  row: HTMLElement;
  label: HTMLElement;
  amount: HTMLElement;
};

describe("SummaryRow", () => {
  let formatCurrencySpy: jest.SpiedFunction<
    typeof currencyUtils.formatCurrency
  >;

  const defaultProps = {
    label: "Item(s) Subtotal",
    amount: 123.45,
  } satisfies SummaryRowProps;

  beforeEach(() => {
    formatCurrencySpy = jest.spyOn(currencyUtils, "formatCurrency");
  });

  afterEach(() => {
    formatCurrencySpy.mockRestore();
  });

  const buildProps = (
    props: Partial<SummaryRowProps> = {},
  ): SummaryRowProps => ({
    ...defaultProps,
    ...props,
  });

  const getSummaryRowElements = (
    container: HTMLElement,
  ): SummaryRowElements => {
    const row = container.firstElementChild as HTMLDivElement;
    const [label, amount] = Array.from(row.children) as [
      HTMLSpanElement,
      HTMLSpanElement,
    ];

    return {
      row,
      label,
      amount,
    };
  };

  const renderSummaryRow = (props: Partial<SummaryRowProps> = {}) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<SummaryRow {...resolvedProps} />);

    return {
      ...renderResult,
      ...getSummaryRowElements(renderResult.container),
    };
  };

  const rerenderSummaryRow = (
    container: HTMLElement,
    rerender: (ui: ReactElement) => void,
    props: Partial<SummaryRowProps> = {},
  ): SummaryRowElements => {
    rerender(<SummaryRow {...buildProps(props)} />);
    return getSummaryRowElements(container);
  };

  describe("rendering", () => {
    it("renders the provided label and formatted amount", () => {
      formatCurrencySpy.mockReturnValue("formatted subtotal");

      const { row, label, amount } = renderSummaryRow();

      expect(row).toBeVisible();
      expect(label).toBeVisible();
      expect(label).toHaveTextContent("Item(s) Subtotal");
      expect(label.tagName).toBe("SPAN");
      expect(amount).toBeVisible();
      expect(amount).toHaveTextContent("formatted subtotal");
      expect(amount.tagName).toBe("SPAN");
      expect(formatCurrencySpy).toHaveBeenCalledTimes(1);
      expect(formatCurrencySpy).toHaveBeenCalledWith(123.45);
    });

    it("updates the formatted amount after rerender", () => {
      formatCurrencySpy
        .mockReturnValueOnce("initial amount")
        .mockReturnValueOnce("updated amount");

      const {
        container,
        rerender,
        amount: initialAmount,
      } = renderSummaryRow({
        amount: 25,
      });

      expect(initialAmount).toHaveTextContent("initial amount");

      const { amount: updatedAmount } = rerenderSummaryRow(
        container,
        rerender,
        {
          amount: 99.99,
        },
      );

      expect(updatedAmount).toHaveTextContent("updated amount");
      expect(formatCurrencySpy).toHaveBeenCalledTimes(2);
      expect(formatCurrencySpy).toHaveBeenNthCalledWith(1, 25);
      expect(formatCurrencySpy).toHaveBeenNthCalledWith(2, 99.99);
    });
  });
});
