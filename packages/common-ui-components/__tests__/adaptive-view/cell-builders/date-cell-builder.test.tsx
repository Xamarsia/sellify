import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { ComponentProps } from "react";

import { DateCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/DateCellBuilder";
import * as dateTimeUtils from "@sellify/common-ui-components/utils/dateTime";

type DateCellBuilderProps = ComponentProps<typeof DateCellBuilder.buildView>;

describe("DateCellBuilder", () => {
  let formatDateSpy: jest.SpiedFunction<typeof dateTimeUtils.formatDate>;

  const defaultProps = {
    date: "2026-06-07T14:05:00.000Z",
  } satisfies DateCellBuilderProps;

  const renderDateCell = (props: Partial<DateCellBuilderProps> = {}) =>
    render(<>{DateCellBuilder.buildView({ ...defaultProps, ...props })}</>);

  beforeEach(() => {
    formatDateSpy = jest.spyOn(dateTimeUtils, "formatDate");
  });

  afterEach(() => {
    formatDateSpy.mockRestore();
  });

  it("renders a formatted date", () => {
    formatDateSpy.mockReturnValue("formatted date");

    renderDateCell();

    expect(screen.getByText("formatted date")).toBeVisible();
    expect(formatDateSpy).toHaveBeenCalledTimes(1);
    expect(formatDateSpy).toHaveBeenCalledWith(defaultProps.date);
  });
});
