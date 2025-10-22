import { useMemo } from "react";

import { OrderStatus } from "constants";
import { OrderStatus as OrderStatusType } from "types";

type Props = {
  status: OrderStatusType;
};

export default function OrderStatusComponent({ status }: Props) {
  const color = useMemo<string>(() => {
    switch (status) {
      case OrderStatus.New:
        return "text-[#279F51]";
      case OrderStatus.InProgress:
        return "text-[#FFA000]";
      case OrderStatus.Shipped:
        return "text-[#2F80ED]";
      case OrderStatus.Canceled:
        return "text-[#FF392B]";
      default:
        return "text-placeholder";
    }
  }, [status]);

  const valueLabel = useMemo<string>(() => {
    switch (status) {
      case OrderStatus.New:
        return "New";
      case OrderStatus.InProgress:
        return "In Progress";
      case OrderStatus.Shipped:
        return "Shipped";
      case OrderStatus.Canceled:
        return "Canceled";
      default:
        return status;
    }
  }, [status]);

  return <span className={color}>{valueLabel}</span>;
}
