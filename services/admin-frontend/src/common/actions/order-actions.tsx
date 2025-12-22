import {
  OrderStatus,
} from "@sellify/common-ui-components/constants";

import { Order, OrderPreview } from "@sellify/admin-ui-components/types";

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


export function getOrders(): Array<Order> {
  return [
    order,
    order2,
    order3,
    order4,
    order2,
    order3,
    // order2,
    // order3,
    // order,
    // order,
    // order2,
    // order3,
    // order4,
    // order4,
    // order3,
    // order2,
    // order3,
    // order4,
    // order2,
    // order3,
    // order2,
    // order3,
  ];
}

const orderPreview: OrderPreview = {
  orderId: 2343,
  date: "June 23, 2024",
  total: 23.46,
  status: OrderStatus.Shipped,
  customerName: "John Thomson",
};

const orderPreview2: OrderPreview = {
  orderId: 67843,
  date: "Aug 7, 2024",
  total: 64.32,
  status: OrderStatus.InProgress,
  customerName: "John Thomson",
};

const orderPreview3: OrderPreview = {
  orderId: 56736784,
  date: "Jan 13, 2025",
  total: 345.46,
  status: OrderStatus.Shipped,
  customerName: "John Thomson",
};

const orderPreview4: OrderPreview = {
  orderId: 245,
  date: "Aug 18, 2025",
  total: 253.82,
  status: OrderStatus.New,
  customerName: "John Thomson",
};

export function getOrderHistory(): Array<OrderPreview> {
  return [
    orderPreview,
    orderPreview2,
    orderPreview3,
    orderPreview4,
    orderPreview,
    orderPreview2,
    orderPreview3,
    orderPreview4,
    orderPreview,
    orderPreview2,
    orderPreview3,
    orderPreview4,
    orderPreview,
    orderPreview2,
    orderPreview3,
    orderPreview4,
    orderPreview,
    orderPreview2,
    orderPreview3,
    orderPreview4,
    orderPreview,
    orderPreview2,
    orderPreview3,
    orderPreview4,
  ];
}
