export type OrderStatus = "NEW" | "IN_PROGRESS" | "SHIPPED" | "CANCELED";
export type ProductStatus = "ACTIVE" | "ARCHIVED";
export type PaymentProvider = "BALANCE" | "CARD" | "GOOGLE_PAY" | "PAYPAL";
export type DeliveryProvider = "DHL" | "UPS" | "PUROLATOR";
export type ProductLabel = "NEW" | "BESTSELLER" | "GIFT"

export type SidebarItemInfo = {
  href: string;
  title: string;
};

export type TabItemInfo = {
  href: string;
  title: string;
};

export type PaymentMethodInfo = {
  title: string;
  isAvailable?: boolean;
};
