import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { ComponentProps } from "react";

import { TextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/TextCellBuilder";

type TextCellBuilderProps = ComponentProps<typeof TextCellBuilder.buildView>;

describe("TextCellBuilder", () => {
  const defaultProps = {
    text: "A detailed description",
  } satisfies TextCellBuilderProps;

  const renderTextCell = (props: Partial<TextCellBuilderProps> = {}) =>
    render(<>{TextCellBuilder.buildView({ ...defaultProps, ...props })}</>);

  it("renders the supplied text", () => {
    renderTextCell();

    expect(screen.getByText(defaultProps.text)).toBeVisible();
  });
});
