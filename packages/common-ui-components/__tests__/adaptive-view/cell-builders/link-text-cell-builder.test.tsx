import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { ComponentProps } from "react";

import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";

type LinkTextCellBuilderProps = ComponentProps<
  typeof LinkTextCellBuilder.buildView
>;

describe("LinkTextCellBuilder", () => {
  const defaultProps = {
    href: "/products/product-21",
    text: "Product View",
  } satisfies LinkTextCellBuilderProps;

  const renderLinkTextCell = (props: Partial<LinkTextCellBuilderProps> = {}) =>
    render(<>{LinkTextCellBuilder.buildView({ ...defaultProps, ...props })}</>);

  it("renders text inside a link", () => {
    renderLinkTextCell();

    expect(screen.getByRole("link", { name: "Product View" })).toHaveAttribute(
      "href",
      defaultProps.href,
    );
  });
});
