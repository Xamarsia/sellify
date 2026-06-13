import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { ComponentProps, ReactElement } from "react";

import { ProductStatusCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/ProductStatusCellBuilder";
import { PRODUCT_STATUS } from "../../../src/components/statuses/ProductStatus";

type ProductStatusCellBuilderProps = ComponentProps<
  typeof ProductStatusCellBuilder.buildView
>;

const productStatuses = [
  [PRODUCT_STATUS.ACTIVE, "Active"],
  [PRODUCT_STATUS.ARCHIVED, "Archived"],
] as const;

describe("ProductStatusCellBuilder", () => {
  const defaultProps = {
    status: PRODUCT_STATUS.ACTIVE,
  } satisfies ProductStatusCellBuilderProps;

  const renderProductStatusCell = (
    props: Partial<ProductStatusCellBuilderProps> = {},
  ) =>
    render(
      <>{ProductStatusCellBuilder.buildView({ ...defaultProps, ...props })}</>,
    );

  const rerenderProductStatusCell = (
    rerender: (ui: ReactElement) => void,
    props: Partial<ProductStatusCellBuilderProps> = {},
  ) => {
    rerender(
      <>{ProductStatusCellBuilder.buildView({ ...defaultProps, ...props })}</>,
    );
  };

  it.each(productStatuses)("renders the %s product status", (status, label) => {
    renderProductStatusCell({ status });

    expect(screen.getByText(label)).toBeVisible();
  });

  describe("status styling", () => {
    it("renders different styles for ACTIVE and ARCHIVED", () => {
      const { rerender } = renderProductStatusCell({ status: "ACTIVE" });
      const activeStatusStyle = screen.getByText("Active").className;

      rerenderProductStatusCell(rerender, { status: "ARCHIVED" });
      const archivedStatusStyle = screen.getByText("Archived").className;

      expect(activeStatusStyle).not.toBe(archivedStatusStyle);
    });
  });
});
