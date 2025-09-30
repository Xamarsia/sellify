"use client";

import { useMemo } from "react";

import { CartItem } from "@sellify/customer-ui-components/types";
import OrderProductsTable from "@sellify/customer-ui-components/table/OrderProductsTable";

import { getProductMaxQuantity } from "common/actions/product-actions";
import {
  getCartItems,
  changeCartItemQuantity,
  removeCartItem,
} from "common/actions/cart-actions";

export default function CheckoutPage() {
  const cartItems: Array<CartItem> = getCartItems();

  return (
    <OrderProductsTable
      content={cartItems}
      onItemRemove={removeCartItem}
      getProductMaxQuantity={getProductMaxQuantity}
      onCartItemQuantityChanged={changeCartItemQuantity}
    />
  );
}
