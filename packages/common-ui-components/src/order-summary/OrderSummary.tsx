import { ComponentProps } from "react";

import SideCard from "../SideCard";
import SummaryRow from "./SummaryRow";
import EmphasizedSummaryRow from "./EmphasizedSummaryRow";
import Button from "../buttons/Button";
import VerticalSpacer from "../helpers/VerticalSpacer";

type ButtonProps = ComponentProps<typeof Button>;

type OrderSummaryProps = {
  itemsSubtotal: number;
  deliveryFee: number;
  orderTotal: number;
  actions?: ButtonProps[];
};

/**
 * Renders a side card with an order cost summary and optional actions.
 * @param itemsSubtotal - Monetary subtotal for all items in the order.
 * @param deliveryFee - Delivery charge added to the order.
 * @param orderTotal - Final total amount shown in the emphasized summary row.
 * @param actions - Optional button props for rendering call-to-action buttons below the summary.
 */
export default function OrderSummary({
  itemsSubtotal,
  deliveryFee,
  orderTotal,
  actions,
}: OrderSummaryProps) {
  return (
    <SideCard>
      <SummaryRow label="Item(s) Subtotal" amount={itemsSubtotal} />
      <SummaryRow label="Delivery Charge" amount={deliveryFee} />
      <VerticalSpacer />
      <EmphasizedSummaryRow label="Total Cost" amount={orderTotal} />

      {actions?.map((action, index) => (
        <Button {...action} key={index} />
      ))}
    </SideCard>
  );
}
