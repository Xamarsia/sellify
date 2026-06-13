import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import type { ComponentProps, ReactElement } from "react";

import OrderStatus, {
  ORDER_STATUS,
} from "@sellify/common-ui-components/statuses/OrderStatus";

type OrderStatusProps = ComponentProps<typeof OrderStatus>;

const orderStatuses = [
  [ORDER_STATUS.NEW, "New"],
  [ORDER_STATUS.IN_PROGRESS, "In Progress"],
  [ORDER_STATUS.SHIPPED, "Shipped"],
  [ORDER_STATUS.CANCELED, "Canceled"],
] as const;

describe("OrderStatus", () => {
  const defaultProps = {
    status: ORDER_STATUS.NEW,
  } satisfies OrderStatusProps;

  const renderOrderStatus = (props: Partial<OrderStatusProps> = {}) =>
    render(<OrderStatus {...defaultProps} {...props} />);

  const rerenderOrderStatus = (
    rerender: (ui: ReactElement) => void,
    props: Partial<OrderStatusProps> = {},
  ) => {
    rerender(<OrderStatus {...defaultProps} {...props} />);
  };

  it.each(orderStatuses)("renders the %s order status", (status, label) => {
    renderOrderStatus({ status });

    expect(screen.getByText(label)).toBeVisible();
  });

  describe("status styling", () => {
    it("renders a different style for every status", () => {
      const [firstStatus, firstLabel] = orderStatuses[0];

      const { rerender } = renderOrderStatus({ status: firstStatus });
      const statusStyles = [screen.getByText(firstLabel).className];

      // Collect the style rendered for each remaining status.
      orderStatuses.slice(1).forEach(([status, label]) => {
        rerenderOrderStatus(rerender, { status });
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
