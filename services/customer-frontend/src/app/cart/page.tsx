"use client";

import { useMemo } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";

import { CartItem } from "@sellify/customer-ui-components/types";
import OrderSubtotal from "@sellify/customer-ui-components/OrderSubtotal";
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
    <div className="flex w-full flex-col gap-9 ">
      <h1>Checkout</h1>
      <div className="flex w-full justify-between gap-9 xl:gap-16 flex-col xl:flex-row">
        <div className="grow">
          <OrderProductsTable
            content={cartItems}
            onItemRemove={onRemoveCartItem}
            getProductMaxQuantity={getProductMaxQuantity}
            onCartItemQuantityChanged={onCartItemQuantityChanged}
          />
        </div>
        <div className="xl:w-min">
          <OrderSubtotal totalPrice={totalPrice} deliveryCharge={5}>
            <Button fill="parent">Proceed to Checkout</Button>
          </OrderSubtotal>
        </div>
      </div>
    </div>
  );
}
