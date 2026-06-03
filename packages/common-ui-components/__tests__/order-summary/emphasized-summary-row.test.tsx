import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import EmphasizedSummaryRow from "@sellify/common-ui-components/order-summary/EmphasizedSummaryRow";
import * as currencyUtils from "../../utils/currency";

type EmphasizedSummaryRowProps = ComponentProps<typeof EmphasizedSummaryRow>;
type EmphasizedSummaryRowElements = {
  row: HTMLElement;
  label: HTMLElement;
  amount: HTMLElement;
};

describe("EmphasizedSummaryRow", () => {
  let formatCurrencySpy: jest.SpiedFunction<
    typeof currencyUtils.formatCurrency
  >;

  const defaultProps = {
    label: "Total Cost",
    amount: 199.99,
  } satisfies EmphasizedSummaryRowProps;

  beforeEach(() => {
    formatCurrencySpy = jest.spyOn(currencyUtils, "formatCurrency");
  });

  afterEach(() => {
    formatCurrencySpy.mockRestore();
  });

  const buildProps = (
    props: Partial<EmphasizedSummaryRowProps> = {},
  ): EmphasizedSummaryRowProps => ({
    ...defaultProps,
    ...props,
  });

  const getEmphasizedSummaryRowElements = (
    container: HTMLElement,
  ): EmphasizedSummaryRowElements => {
    const row = container.firstElementChild as HTMLDivElement;
    const [label, amount] = Array.from(row.children) as [
      HTMLHeadingElement,
      HTMLHeadingElement,
    ];

    return {
      row,
      label,
      amount,
    };
  };

  const renderEmphasizedSummaryRow = (
    props: Partial<EmphasizedSummaryRowProps> = {},
  ) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<EmphasizedSummaryRow {...resolvedProps} />);

    return {
      ...renderResult,
      ...getEmphasizedSummaryRowElements(renderResult.container),
    };
  };

  const rerenderEmphasizedSummaryRow = (
    container: HTMLElement,
    rerender: (ui: ReactElement) => void,
    props: Partial<EmphasizedSummaryRowProps> = {},
  ): EmphasizedSummaryRowElements => {
    rerender(<EmphasizedSummaryRow {...buildProps(props)} />);
    return getEmphasizedSummaryRowElements(container);
  };

  describe("rendering", () => {
    it("renders the provided label and formatted amount", () => {
      formatCurrencySpy.mockReturnValue("formatted total");

      const { row, label, amount } = renderEmphasizedSummaryRow();

      expect(row).toBeVisible();
      expect(label).toBeVisible();
      expect(label).toHaveTextContent("Total Cost");
      expect(label.tagName).toBe("H3");
      expect(amount).toBeVisible();
      expect(amount).toHaveTextContent("formatted total");
      expect(amount.tagName).toBe("H3");
      expect(formatCurrencySpy).toHaveBeenCalledTimes(1);
      expect(formatCurrencySpy).toHaveBeenCalledWith(199.99);
    });

    it("updates the formatted amount after rerender", () => {
      formatCurrencySpy
        .mockReturnValueOnce("initial total")
        .mockReturnValueOnce("updated total");

      const {
        container,
        rerender,
        amount: initialAmount,
      } = renderEmphasizedSummaryRow({
        amount: 20,
      });

      expect(initialAmount).toHaveTextContent("initial total");

      const { amount: updatedAmount } = rerenderEmphasizedSummaryRow(
        container,
        rerender,
        {
          amount: 120.5,
        },
      );

      expect(updatedAmount).toHaveTextContent("updated total");
      expect(formatCurrencySpy).toHaveBeenCalledTimes(2);
      expect(formatCurrencySpy).toHaveBeenNthCalledWith(1, 20);
      expect(formatCurrencySpy).toHaveBeenNthCalledWith(2, 120.5);
    });
  });
});
