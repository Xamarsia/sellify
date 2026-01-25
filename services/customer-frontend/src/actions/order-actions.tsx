import {
  OrderStatus,
  PaymentProvider,
} from "@sellify/common-ui-components/constants";
import {
  PaymentMethodInfo,
  PaymentProvider as PaymentProviderType,
} from "@sellify/common-ui-components/types";
import {
  CartItem,
  ContactInfo,
  OrderRequest,
  DeliveryAddress,
  OrderDetails,
  OrderPreview,
} from "@sellify/customer-ui-components/types";
import { getCartItems } from "./cart-actions";

const orderPreview: OrderPreview = {
  orderId: 2343,
  date: "June 23, 2024",
  total: 23.46,
  status: OrderStatus.Shipped,
};

const orderPreview2: OrderPreview = {
  orderId: 67843,
  date: "Aug 7, 2024",
  total: 64.32,
  status: OrderStatus.InProgress,
};

const orderPreview3: OrderPreview = {
  orderId: 56736784,
  date: "Jan 13, 2025",
  total: 345.46,
  status: OrderStatus.Shipped,
};

const orderPreview4: OrderPreview = {
  orderId: 245,
  date: "Aug 18, 2025",
  total: 253.82,
  status: OrderStatus.New,
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

const contactInfo: ContactInfo = {
  fullName: "Robert Fox",
  phoneNumber: "+1 (416) 555-0123",
};

const deliveryAddress: DeliveryAddress = {
  address: "123 Maple Street, Toronto, ON, M5A 1A1",
  country: "Canada",
};

const cartItems: Array<CartItem> = getCartItems();

export function getPaymentMethodInfo(
  paymentProvider: PaymentProviderType,
): PaymentMethodInfo | undefined {
  const paymentMethods: Map<PaymentProviderType, PaymentMethodInfo> =
    getPaymentProviders();

  return paymentMethods.get(paymentProvider);
}

// TODO  make it React Action
export function getOrder(orderId: number): OrderDetails {
  const order: OrderDetails = {
    orderId: 2343,
    customerId: 567456456,
    status: OrderStatus.Shipped,
    purchaseDate: "June 23, 2024",
    contactInfo: contactInfo,
    deliveryAddress: deliveryAddress,
    paymentProvider: PaymentProvider.Balance,
    totalPrice: 35.46,
    itemsSubtotal: 23.46,
    products: cartItems,
    deliveryFee: 56,
    deliveryProvider: "DHL",
    trackingDeliveryId: "567334565434566ft",
    deliveryDate: "June 28, 2024",
  };
  return order;
}

export function getDeliveryFee(): number {
  return 134;
}

// Returns the order ID if the order is created successfully.
export function order(orderRequest: OrderRequest): number | undefined {
  return 45654645;
}
