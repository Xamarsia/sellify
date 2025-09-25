"use client";

import { useMemo } from "react";

import { CartItem } from "@sellify/customer-ui-components/types";
import OrderProductsTable from "@sellify/customer-ui-components/table/OrderProductsTable";

import { getProductMaxQuantity } from "common/actions/product-actions";
import {
  getCartItems,
  onCartItemQuantityChanged,
  onRemoveCartItem,
} from "common/actions/cart-actions";

export default function CheckoutPage() {
  const cartItems: Array<CartItem> = getCartItems();

  const totalPrice = useMemo((): number => {
    return cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.product.price * currentValue.amount;
    }, 0);
  }, [cartItems]);

  return (
    <OrderProductsTable
      content={cartItems}
      onItemRemove={onRemoveCartItem}
      getProductMaxQuantity={getProductMaxQuantity}
      onCartItemQuantityChanged={onCartItemQuantityChanged}
    />
  );
}
