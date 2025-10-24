import {
  OrderStatus,
  ShippingProvider,
} from "@sellify/common-ui-components/types";

export type ProgressStepInfo = {
  step: number;
  title: string;
  icon: ReactNode;
};

export type NavigationLink = {
  href: string;
  title: string;
};

export type ProductDetails = {
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

export type OrderDetails = {
  orderId: number;
  customerId: number;
  status: OrderStatus;
  purchaseDate: string;
  contactInfo: ContactInfo;
  labels?: Array<ProductLabel>;
  deliveryAddress: DeliveryAddress;
  paymentProvider: PaymentProvider;
  products: Array<CartItem>;
  deliveryFee: number;
  deliveryProvider?: DeliveryProvider;
  trackingDeliveryId?: string;
  deliveryDate?: string;
  itemsSubtotal: number;
  totalPrice: number;
};

export type OrderRequest = {
  contactInfo: ContactInfo;
  deliveryAddress: DeliveryAddress;
  paymentProvider: PaymentProvider;
  products: Array<CartItem>;
  deliveryFee: number;
  itemsSubtotal: number;
  totalPrice: number;
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
  fullName: string;
  phoneNumber: string;
};

export type DeliveryAddress = {
  country: string;
  address: string;
};

export type FilterProperty = {
  key: string;
  value: string;
  amount?: number
};

export type FilterSection = {
  key: string;
  value: string;
  filterProperties: Array<FilterProperty>
};

export type Filter = {
  key: string;
  sections: FilterSection
};
