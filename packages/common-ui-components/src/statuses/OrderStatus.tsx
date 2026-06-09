import type { StatusProps } from "./types";

export const ORDER_STATUS = {
  NEW: "NEW",
  IN_PROGRESS: "IN_PROGRESS",
  SHIPPED: "SHIPPED",
  CANCELED: "CANCELED",
} as const;

export type OrderStatusVariant =
  (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS];

type OrderStatusProps = {
  readonly status: OrderStatusVariant;
};

const orderStatusDefinitions = {
  [ORDER_STATUS.NEW]: {
    label: "New",
    color: "text-essential-green",
  },
  [ORDER_STATUS.IN_PROGRESS]: {
    label: "In Progress",
    color: "text-essential-orange",
  },
  [ORDER_STATUS.SHIPPED]: {
    label: "Shipped",
    color: "text-essential-blue",
  },
  [ORDER_STATUS.CANCELED]: {
    label: "Canceled",
    color: "text-essential-red",
  },
} satisfies Readonly<Record<OrderStatusVariant, StatusProps>>;

export default function OrderStatus({ status }: OrderStatusProps) {
  const { label, color } = orderStatusDefinitions[status];

  return <span className={color}>{label}</span>;
}
