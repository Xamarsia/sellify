export type PaymentProvider = "BALANCE" | "CARD" | "GOOGLE_PAY" | "PAYPAL";
export type DeliveryProvider = "DHL" | "UPS" | "PUROLATOR";
export type ProductLabel = "NEW" | "BESTSELLER" | "GIFT";

export type NavMenuItem = {
  href: string;
  title: string;
};

export type TabItemInfo = {
  href: string;
  title: string;
  content: ReactNode;
};

export type PaymentMethodInfo = {
  title: string;
  isAvailable?: boolean;
};

export type CollapsiblePanelInfo = {
  title: string;
  content: ReactNode;
};
