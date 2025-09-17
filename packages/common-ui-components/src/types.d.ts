export type OrderStatus = "NEW" | "IN_PROGRESS" | "SHIPPED" | "CANCELED";
export type ProductStatus = "ACTIVE" | "ARCHIVED";
export type PaymentProvider = "BALANCE" | "CARD" | "GOOGLE_PAY" | "PAYPAL";

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
