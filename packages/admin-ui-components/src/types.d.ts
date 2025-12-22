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

export type Product = {
  image: string;
  title: string;
  shortDescription?: string;
  description?: string;
  productId: number;
  status: ProductStatus;
  quantity: number;
  category: string;
  price: number;
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
  status: CustomerStatus;
};

export type Category = {
  title: string;
  relatedProductsCount: number;
};

export type Admin = {
  adminId: number;
  name: string;
  role: string;
  createdOn: string;
  status: AdminStatus;
};

export type Role = {
  title: string;
  relatedUsersCount: number;
};

export type ProductPreview = {
  image: string;
  title: string;
  price: number;
  productId: number;
};

export type AdminPreview = {
  adminId: number;
  name: string;
  role: string;
};

export type OrderPreview = {
  orderId: number;
  date: string;
  total: number;
  status: OrderStatus;
  customerName: string;
};