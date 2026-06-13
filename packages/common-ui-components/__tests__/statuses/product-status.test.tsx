import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { ComponentProps, ReactElement } from "react";

import ProductStatus, {
  PRODUCT_STATUS,
} from "@sellify/common-ui-components/statuses/ProductStatus";

type ProductStatusProps = ComponentProps<typeof ProductStatus>;

const productStatuses = [
  [PRODUCT_STATUS.ACTIVE, "Active"],
  [PRODUCT_STATUS.ARCHIVED, "Archived"],
] as const;

describe("ProductStatus", () => {
  const defaultProps = {
    status: PRODUCT_STATUS.ACTIVE,
  } satisfies ProductStatusProps;

  const renderProductStatus = (props: Partial<ProductStatusProps> = {}) =>
    render(<ProductStatus {...defaultProps} {...props} />);

  const rerenderProductStatus = (
    rerender: (ui: ReactElement) => void,
    props: Partial<ProductStatusProps> = {},
  ) => {
    rerender(<ProductStatus {...defaultProps} {...props} />);
  };

  it.each(productStatuses)("renders the %s product status", (status, label) => {
    renderProductStatus({ status });

    expect(screen.getByText(label)).toBeVisible();
  });

  describe("status styling", () => {
    it("renders different styles for ACTIVE and ARCHIVED", () => {
      const { rerender } = renderProductStatus({
        status: PRODUCT_STATUS.ACTIVE,
      });
      const activeStatusStyle = screen.getByText("Active").className;

      rerenderProductStatus(rerender, { status: PRODUCT_STATUS.ARCHIVED });
      const archivedStatusStyle = screen.getByText("Archived").className;

      expect(activeStatusStyle).not.toBe(archivedStatusStyle);
    });
  });
});
