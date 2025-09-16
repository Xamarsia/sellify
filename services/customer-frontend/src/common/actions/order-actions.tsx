import { OrderStatus } from "@sellify/common-ui-components/constants";

import { Order } from "types";

const order: Order = {
  orderId: 2343,
  date: "June 23, 2024",
  customerName: "John Thomson",
  total: 23.46,
  status: OrderStatus.Shipped,
  items: 1,
};

const order2: Order = {
  orderId: 67843,
  date: "Aug 7, 2024",
  customerName: "John Thomson",
  total: 64.32,
  status: OrderStatus.InProgress,
  items: 5,
};

const order3: Order = {
  orderId: 56736784,
  date: "Jan 13, 2025",
  customerName: "John Thomson",
  total: 345.46,
  status: OrderStatus.Shipped,
  items: 3,
};

const order4: Order = {
  orderId: 245,
  date: "Aug 18, 2025",
  customerName: "John Thomson",
  total: 253.82,
  status: OrderStatus.New,
  items: 10,
};

export function getOrderHistory(): Array<Order> {
  return [
    order,
    order2,
    order3,
    order4,
    order,
    order2,
    order3,
    order4,
    order,
    order2,
    order3,
    order4,
    order,
    order2,
    order3,
    order4,
    order,
    order2,
    order3,
    order4,
    order,
    order2,
    order3,
    order4,
  ];
}

export function filterOrdersHistory(query: string): Array<Order> {
  return [order3, order4];
}
