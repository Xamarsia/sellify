import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { ComponentProps, ReactElement } from "react";

import { OrderStatusCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/OrderStatusCellBuilder";
import { ORDER_STATUS } from "../../../src/components/statuses/OrderStatus";

type OrderStatusCellBuilderProps = ComponentProps<
  typeof OrderStatusCellBuilder.buildView
>;

const orderStatuses = [
  [ORDER_STATUS.NEW, "New"],
  [ORDER_STATUS.IN_PROGRESS, "In Progress"],
  [ORDER_STATUS.SHIPPED, "Shipped"],
  [ORDER_STATUS.CANCELED, "Canceled"],
] as const;

describe("OrderStatusCellBuilder", () => {
  const defaultProps = {
    status: ORDER_STATUS.NEW,
  } satisfies OrderStatusCellBuilderProps;

  const renderOrderStatusCell = (
    props: Partial<OrderStatusCellBuilderProps> = {},
  ) =>
    render(
      <>{OrderStatusCellBuilder.buildView({ ...defaultProps, ...props })}</>,
    );

  const rerenderOrderStatusCell = (
    rerender: (ui: ReactElement) => void,
    props: Partial<OrderStatusCellBuilderProps> = {},
  ) => {
    rerender(
      <>{OrderStatusCellBuilder.buildView({ ...defaultProps, ...props })}</>,
    );
  };

  it.each(orderStatuses)("renders the %s order status", (status, label) => {
    renderOrderStatusCell({ status });

    expect(screen.getByText(label)).toBeVisible();
  });

  describe("status styling", () => {
    it("renders a different style for every status", () => {
      const [firstStatus, firstLabel] = orderStatuses[0];

      const { rerender } = renderOrderStatusCell({ status: firstStatus });
      const statusStyles = [screen.getByText(firstLabel).className];

      // Collect the style rendered for each remaining status.
      orderStatuses.slice(1).forEach(([status, label]) => {
        rerenderOrderStatusCell(rerender, { status });
        statusStyles.push(screen.getByText(label).className);
      });

      // Compare every status style with each style that follows it.
      for (let i = 0; i < statusStyles.length; i++) {
        for (let j = i + 1; j < statusStyles.length; j++) {
          expect(statusStyles[i]).not.toBe(statusStyles[j]);
        }
      }
    });
  });
});
