export const OrderStatus = {
  New: "NEW",
  InProgress: "IN_PROGRESS",
  Shipped: "SHIPPED",
  Canceled: "CANCELED",
} as const;

export const ProductStatus = {
  Active: "ACTIVE",
  Archived: "ARCHIVED",
} as const;

export const PaymentProvider = {
  Balance: "BALANCE",
  Card: "CARD",
  GooglePay: "GOOGLE_PAY",
  Paypal: "PAYPAL",
} as const;
