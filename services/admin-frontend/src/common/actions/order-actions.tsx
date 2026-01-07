import {
  PaymentMethodInfo,
  PaymentProvider as PaymentProviderType,
} from "@sellify/common-ui-components/types";
import {
  OrderStatus,
  PaymentProvider,
} from "@sellify/common-ui-components/constants";

import {
  ContactInfo,
  DeliveryAddress,
  Order,
  OrderDetails,
  OrderPreview,
} from "@sellify/admin-ui-components/types";

import { getCartItems } from "./product-actions";

const deliveryAddress: DeliveryAddress = {
  address: "123 Maple Street, Toronto, ON, M5A 1A1",
  country: "Canada",
};

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
  customerName:
    "LongUnbreakableCustomerName|LongUnbreakableCustomerNameLongUnbreakableCustomerName",
  total: 64.32,
  status: OrderStatus.InProgress,
  items: 5,
};

const order3: Order = {
  orderId: 56736784,
  date: "Jan 13, 2025",
  customerName:
    "Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name",
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
  customerName:
    "LongUnbreakableCustomerName|LongUnbreakableCustomerNameLongUnbreakableCustomerName",
};

const orderPreview3: OrderPreview = {
  orderId: 56736784,
  date: "Jan 13, 2025",
  total: 345.46,
  status: OrderStatus.Shipped,
  customerName:
    "Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name",
};

const orderPreview4: OrderPreview = {
  orderId: 245,
  date: "Aug 18, 2025",
  total: 253.82,
  status: OrderStatus.New,
  customerName: "John Thomson",
};

const contactInfo: ContactInfo = {
  fullName: "Robert Fox",
  phoneNumber: "+1 (416) 555-0123",
};

export function getContactInfo(orderId: number): ContactInfo {
  return contactInfo;
}

export function getDeliveryAddress(orderId: number): DeliveryAddress {
  return deliveryAddress;
}

const orderDetails: OrderDetails = {
  orderId: 2343,
  customerId: 567456456,
  status: OrderStatus.Shipped,
  purchaseDate: "June 23, 2024",
  contactInfo: getContactInfo(2343),
  deliveryAddress: getDeliveryAddress(2343),
  paymentProvider: PaymentProvider.Balance,
  totalPrice: 35.46,
  itemsSubtotal: 23.46,
  products: getCartItems(),
  deliveryFee: 56,
  deliveryProvider: "DHL",
  trackingDeliveryId: "567334565434566ft",
  deliveryDate: "June 28, 2024",
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

export function filterOrdersHistory(query: string): Array<OrderPreview> {
  return [orderPreview3, orderPreview4];
}

export function getOrderById(orderId: number): OrderDetails {
  return orderDetails;
}

export function getOrdersByCustomerId(customerId: number): Array<OrderPreview> {
  return [
    orderPreview,
    orderPreview2,
    orderPreview3,
    orderPreview4,
    orderPreview,
    orderPreview2,
    orderPreview3,
  ];
}

export function getPaymentProviders(): Map<
  PaymentProviderType,
  PaymentMethodInfo
> {
  const paymentProviders: Map<PaymentProviderType, PaymentMethodInfo> = new Map(
    [
      [
        PaymentProvider.Balance,
        { title: "Balance ($1050.06)", isAvailable: true },
      ],
      [PaymentProvider.Card, { title: "Debit/Credit Card", isAvailable: true }],
      [PaymentProvider.GooglePay, { title: "Google Pay", isAvailable: false }],
      [PaymentProvider.Paypal, { title: "Paypal", isAvailable: false }],
    ],
  );
  return paymentProviders;
}

export function getPaymentMethodInfo(
  paymentProvider: PaymentProviderType,
): PaymentMethodInfo | undefined {
  const paymentMethods: Map<PaymentProviderType, PaymentMethodInfo> =
    getPaymentProviders();

  return paymentMethods.get(paymentProvider);
}
