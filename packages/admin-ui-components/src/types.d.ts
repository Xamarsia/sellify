import {
  OrderStatus,
  ProductStatus,
} from "@sellify/common-ui-components/types";

export type AdminStatus = "ACTIVE" | "INVITED" | "DISABLED";
export type CustomerStatus = "ACTIVE" | "ARCHIVED";

export type Order = {
  orderId: number;
  date: string;
  customerName: string;
  total: number;
  status: OrderStatus;
  items: number;
};

export type OrderPreview = {
  orderId: number;
  date: string;
  total: number;
  status: OrderStatus;
  customerName: string;
  customerId: number;
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

export type Inventory = {
  image: string;
  productTitle: string;
  productId: number;
  quantity: number;
};

export type Customer = {
  customerId: number;
  name: string;
  ordersCount: number;
  totalExpenses: number;
  createdOn: string;
  status: CustomerStatus;
  deliveryAddress: DeliveryAddress;
};

export type DeliveryAddress = {
  country: string;
  address: string;
};

export type Category = {
  categoryId: number;
  title: string;
  description?: string;
  relatedProductsCount: number;
};

export type CategoryPreview = {
  categoryId: number;
  title: string;
};

export type Admin = {
  adminId: number;
  name: string;
  role: RolePreview;
  createdOn: string;
  status: AdminStatus;
};

export type Permission = {
  id: number;
  title: string;
  description?: string;
};

export type PermissionPreview = {
  id: number;
  title: string;
};

export type Role = {
  roleId: number;
  title: string;
  relatedUsersCount: number;
  permissions: number[];
};

export type RolePreview  = {
  roleId: number;
  title: string;
};

export type AdminPreview = {
  adminId: number;
  name: string;
  role: string;
};

export type ProductPreview = {
  productId: number;
  image: string;
  title: string;
  price: number;
};

export type Product = {
  productId: number;
  image: string;
  title: string;
  shortDescription?: string;
  description?: string;
  status: ProductStatus;
  quantity: number;
  category: CategoryPreview;
  price: number;
};

export type ProductDetails = {
  productId: number;
  images: string[];
  title: string;
  shortDescription?: string;
  description?: string;
  status: ProductStatus;
  quantity: number;
  category: CategoryPreview;
  price: number;
  creationDate: string;
  lastModificationDate: string;
};
