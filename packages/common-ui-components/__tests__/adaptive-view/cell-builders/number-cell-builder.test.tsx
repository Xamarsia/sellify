import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { ComponentProps } from "react";

import { NumberCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/NumberCellBuilder";

type NumberCellBuilderProps = ComponentProps<
  typeof NumberCellBuilder.buildView
>;

describe("NumberCellBuilder", () => {
  const defaultProps = {
    value: 123.45,
  } satisfies NumberCellBuilderProps;

  const renderNumberCell = (props: Partial<NumberCellBuilderProps> = {}) =>
    render(<>{NumberCellBuilder.buildView({ ...defaultProps, ...props })}</>);

  it("renders the supplied number", () => {
    renderNumberCell();

    expect(screen.getByText(defaultProps.value)).toBeVisible();
  });
});
