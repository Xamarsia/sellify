import {
  OrderStatus,
  ShippingProvider,
} from "@sellify/common-ui-components/types";

export type ProgressItemInfo = {
  href: string;
  title: string;
  icon: ReactNode;
};

export type SearchNavigationItem = {
  href: string;
  title: string;
};

export type Product = {
  productId: number;
  images: string[];
  title: string;
  shortDescription?: string;
  description?: string;
  status: number;
  quantity: number;
  category: string;
  price: number;
};

export type OrderPreview = {
  orderId: number;
  date: string;
  total: number;
  status: OrderStatus;
};

export type Order = {
  orderId: number;
  customerId: number;
  status: OrderStatus;
  purchaseDate: string;
  contactInfo: ContactInfo;
  labels?: Array<ProductLabel>;
  deliveryAddress: DeliveryAddress;
  paymentProvider: PaymentProvider;
  products: Array<CartItem>;
  deliveryCharge: number;
  deliveryProvider?: DeliveryProvider;
  trackingDeliveryId?: string;
  deliveryDate?: string;
  itemsSubtotal: number;
  grandTotal: number;
};

// export type Order = {
//   orderId: number;
//   customerId: number;
//   status: OrderStatus;
//   purchaseDate: string;
//   contactInfo: ContactInfo;
//   deliveryAddress: DeliveryAddress
//   paymentProvider: PaymentProvider
//   total: number;
//   products: Array<CartItem>;
//   shippingInfo: ShippingInfo;
// };

// export type ShippingInfo = {
//   trackingNumber?: string;
//   deliveryDate?: string;
//   deliveryCharge: number;
//   shippingProvider?: ShippingProvider;
// }

// export type DeliveryInfo = {
//   deliveryId: number; // orderId + providerId
//   contactInfo: ContactInfo;
//   deliveryCharge: number;
//   estimatedDeliveryDate: string;  // estimated if not delivered yet
//   deliveryAddress: DeliveryAddress;
//   isDelivered?: boolean;
// };

export type ProductPreview = {
  productId: number;
  image: string;
  hoveredImage: string;
  title: string;
  price: number;
};

export type SearchItem = {
  productId: number;
  image: string;
  title: string;
};

export type CartItem = {
  cartItemId: number;
  product: ProductPreview;
  amount: number;
};

export type ContactInfo = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export type DeliveryAddress = {
  country: string;
  address: string;
};
