import { ReactNode } from "react";

import { OrderStatus } from "@sellify/common-ui-components/types.ts";

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

export type Order = {
  orderId: number;
  date: string;
  customerName: string;
  total: number;
  status: OrderStatus;
  items: number;
};

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
  product: ProductPreview;
  amount: number;
};
