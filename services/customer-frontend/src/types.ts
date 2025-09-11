import { OrderStatus } from "@sellify/common-ui-components/types.ts";
import { CartItem } from "@sellify/customer-ui-components/types.ts";

export type DialogContext = {
  addProductToCart: (cartItem: CartItem) => void;
};

export type CartContext = {
  openCartPanel: (cartItems: Array<CartItem>) => void;
};

export type SearchContext = {
  openSearchPanel: () => void;
};

export type Order = {
  orderId: number;
  date: string;
  customerName: string;
  total: number;
  status: OrderStatus;
  items: number;
};
