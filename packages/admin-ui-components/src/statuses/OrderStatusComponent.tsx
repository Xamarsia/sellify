import { useMemo } from "react";

import { OrderStatus } from "@sellify/common-ui-components/constants";
import { OrderStatus as OrderStatusType } from "@sellify/common-ui-components/types";

type OrderStatusComponentProps = {
  status: OrderStatusType;
};

export default function OrderStatusComponent({
  status,
}: OrderStatusComponentProps) {
  const color = useMemo<string>(() => {
    switch (status) {
      case OrderStatus.New:
        return "text-essential-green";
      case OrderStatus.InProgress:
        return "text-essential-orange";
      case OrderStatus.Shipped:
        return "text-essential-blue";
      case OrderStatus.Canceled:
        return "text-essential-red";
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
