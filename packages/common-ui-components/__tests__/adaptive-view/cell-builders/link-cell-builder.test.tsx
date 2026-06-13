import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { ComponentProps } from "react";

import { LinkCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkCellBuilder";

type LinkCellBuilderProps = ComponentProps<typeof LinkCellBuilder.buildView>;

describe("LinkCellBuilder", () => {
  const defaultProps = {
    href: "/products/product-212",
    children: <strong>Product View</strong>,
  } satisfies LinkCellBuilderProps;

  const renderLinkCell = (props: Partial<LinkCellBuilderProps> = {}) =>
    render(<>{LinkCellBuilder.buildView({ ...defaultProps, ...props })}</>);

  it("renders arbitrary content inside a link", () => {
    renderLinkCell();

    expect(screen.getByRole("link", { name: "Product View" })).toHaveAttribute(
      "href",
      defaultProps.href,
    );
    expect(screen.getByText("Product View").tagName).toBe("STRONG");
  });
});
