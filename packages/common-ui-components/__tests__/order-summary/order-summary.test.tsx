import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

import { ComponentProps } from "react";

import OrderSummary from "@sellify/common-ui-components/order-summary/OrderSummary";
import * as currencyUtils from "../../utils/currency";

type OrderSummaryProps = ComponentProps<typeof OrderSummary>;
type OrderSummaryElements = {
  sideCard: HTMLElement;
  itemsSubtotalRow: HTMLElement;
  deliveryFeeRow: HTMLElement;
  spacer: HTMLElement;
  totalCostRow: HTMLElement;
  actionButtons: HTMLButtonElement[];
};

describe("OrderSummary", () => {
  let formatCurrencySpy: jest.SpiedFunction<
    typeof currencyUtils.formatCurrency
  >;

  const defaultProps = {
    itemsSubtotal: 125,
    deliveryFee: 10,
    orderTotal: 135,
  } satisfies OrderSummaryProps;

  beforeEach(() => {
    formatCurrencySpy = jest.spyOn(currencyUtils, "formatCurrency");
  });

  afterEach(() => {
    formatCurrencySpy.mockRestore();
  });

  const buildProps = (
    props: Partial<OrderSummaryProps> = {},
  ): OrderSummaryProps => ({
    ...defaultProps,
    ...props,
  });

  const getSummaryRowElements = (row: HTMLElement) => {
    const [label, amount] = Array.from(row.children) as [
      HTMLElement,
      HTMLElement,
    ];
    return {
      label,
      amount,
    };
  };

  const getOrderSummaryElements = (
    container: HTMLElement,
  ): OrderSummaryElements => {
    const sideCard = container.firstElementChild as HTMLElement;
    const [
      itemsSubtotalRow,
      deliveryFeeRow,
      spacer,
      totalCostRow,
      ...actionButtons
    ] = Array.from(sideCard.children) as [
      HTMLDivElement,
      HTMLDivElement,
      HTMLDivElement,
      HTMLDivElement,
      ...Array<HTMLButtonElement>,
    ];

    return {
      sideCard,
      itemsSubtotalRow,
      deliveryFeeRow,
      spacer,
      totalCostRow,
      actionButtons,
    };
  };

  const renderOrderSummary = (props: Partial<OrderSummaryProps> = {}) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<OrderSummary {...resolvedProps} />);

    return {
      ...renderResult,
      ...getOrderSummaryElements(renderResult.container),
    };
  };

  describe("rendering", () => {
    it("renders the side card with the summary rows, spacer, and total row", () => {
      formatCurrencySpy
        .mockReturnValueOnce("formatted subtotal")
        .mockReturnValueOnce("formatted delivery")
        .mockReturnValueOnce("formatted total");

      const {
        sideCard,
        itemsSubtotalRow,
        deliveryFeeRow,
        spacer,
        totalCostRow,
        actionButtons,
      } = renderOrderSummary();

      const { label: itemsSubtotalLabel, amount: itemsSubtotalAmount } =
        getSummaryRowElements(itemsSubtotalRow);
      const { label: deliveryFeeLabel, amount: deliveryFeeAmount } =
        getSummaryRowElements(deliveryFeeRow);
      const { label: totalCostLabel, amount: totalCostAmount } =
        getSummaryRowElements(totalCostRow);

      expect(sideCard).toBeVisible();
      expect(sideCard.tagName).toBe("SECTION");

      expect(itemsSubtotalLabel).toHaveTextContent("Item(s) Subtotal");
      expect(itemsSubtotalLabel.tagName).toBe("SPAN");
      expect(itemsSubtotalAmount).toHaveTextContent("formatted subtotal");
      expect(itemsSubtotalAmount.tagName).toBe("SPAN");

      expect(deliveryFeeLabel).toHaveTextContent("Delivery Charge");
      expect(deliveryFeeLabel.tagName).toBe("SPAN");
      expect(deliveryFeeAmount).toHaveTextContent("formatted delivery");
      expect(deliveryFeeAmount.tagName).toBe("SPAN");

      expect(spacer).toBeEmptyDOMElement();

      expect(totalCostLabel).toHaveTextContent("Total Cost");
      expect(totalCostLabel.tagName).toBe("H3");
      expect(totalCostAmount).toHaveTextContent("formatted total");
      expect(totalCostAmount.tagName).toBe("H3");

      expect(actionButtons).toHaveLength(0);
      expect(formatCurrencySpy).toHaveBeenCalledTimes(3);
      expect(formatCurrencySpy).toHaveBeenNthCalledWith(1, 125);
      expect(formatCurrencySpy).toHaveBeenNthCalledWith(2, 10);
      expect(formatCurrencySpy).toHaveBeenNthCalledWith(3, 135);
    });

    it("renders the action buttons in the provided order", () => {
      formatCurrencySpy
        .mockReturnValueOnce("formatted subtotal")
        .mockReturnValueOnce("formatted delivery")
        .mockReturnValueOnce("formatted total");

      const { actionButtons } = renderOrderSummary({
        actions: [{ children: "Checkout" }, { children: "Continue Shopping" }],
      });

      expect(actionButtons).toHaveLength(2);
      expect(actionButtons[0]).toHaveTextContent("Checkout");
      expect(actionButtons[1]).toHaveTextContent("Continue Shopping");
    });
  });

  describe("actions", () => {
    it("invokes the corresponding action handler when a button is clicked", async () => {
      formatCurrencySpy
        .mockReturnValueOnce("formatted subtotal")
        .mockReturnValueOnce("formatted delivery")
        .mockReturnValueOnce("formatted total");

      const user = userEvent.setup();
      const checkoutClickMock = jest.fn();
      const continueShoppingClickMock = jest.fn();

      const { actionButtons } = renderOrderSummary({
        actions: [
          { children: "Checkout", onClick: checkoutClickMock },
          { children: "Continue Shopping", onClick: continueShoppingClickMock },
        ],
      });
      const continueShoppingButton = actionButtons[1] as HTMLButtonElement;
      await user.click(continueShoppingButton);

      expect(checkoutClickMock).not.toHaveBeenCalled();
      expect(continueShoppingClickMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("styling", () => {
    it("applies different styles to regular and emphasized summary rows", () => {
      formatCurrencySpy
        .mockReturnValueOnce("formatted subtotal")
        .mockReturnValueOnce("formatted delivery")
        .mockReturnValueOnce("formatted total");

      const { itemsSubtotalRow, totalCostRow } = renderOrderSummary();

      expect(itemsSubtotalRow.className).not.toBe(totalCostRow.className);
    });
  });
});
