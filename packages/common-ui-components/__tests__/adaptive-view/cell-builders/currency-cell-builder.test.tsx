import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { ComponentProps } from "react";

import { CurrencyCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/CurrencyCellBuilder";
import * as currencyUtils from "@sellify/common-ui-components/utils/currency";

type CurrencyCellBuilderProps = ComponentProps<
  typeof CurrencyCellBuilder.buildView
>;

describe("CurrencyCellBuilder", () => {
  let formatCurrencySpy: jest.SpiedFunction<
    typeof currencyUtils.formatCurrency
  >;

  const defaultProps = {
    amount: 1234.5,
  } satisfies CurrencyCellBuilderProps;

  const renderCurrencyCell = (props: Partial<CurrencyCellBuilderProps> = {}) =>
    render(<>{CurrencyCellBuilder.buildView({ ...defaultProps, ...props })}</>);

  beforeEach(() => {
    formatCurrencySpy = jest.spyOn(currencyUtils, "formatCurrency");
  });

  afterEach(() => {
    formatCurrencySpy.mockRestore();
  });

  it("renders a formatted currency amount", () => {
    formatCurrencySpy.mockReturnValue("formatted amount");

    renderCurrencyCell();

    expect(screen.getByText("formatted amount")).toBeVisible();
    expect(formatCurrencySpy).toHaveBeenCalledTimes(1);
    expect(formatCurrencySpy).toHaveBeenCalledWith(defaultProps.amount);
  });
});
