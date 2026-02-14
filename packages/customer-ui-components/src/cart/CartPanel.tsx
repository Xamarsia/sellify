"use client";

import { useMemo } from "react";

import SidePanel from "@sellify/common-ui-components/SidePanel";
import Button from "@sellify/common-ui-components/buttons/Button";

import CartItem from "./CartItem";
import { CartItem as CartItemType } from "../types";

type CartPanelProps = {
  open: boolean;
  cartItems: Array<CartItemType>;
  onClose: () => void;
  onCartItemRemove: (productId: number) => void;
};

export default function CartPanel({
  open,
  cartItems,
  onClose,
  onCartItemRemove,
}: CartPanelProps) {
  const totalPrice = useMemo<number>(() => {
    return cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.product.price * currentValue.amount;
    }, 0);
  }, [cartItems]);

  return (
    <SidePanel open={open} onClose={onClose} title="Cart">
      {cartItems.length ? (
        <div className="grow flex flex-col justify-between h-full gap-5 overflow-y-auto">
          <ul className="flex grow flex-col gap-4 overflow-y-auto scrollbar pr-4">
            {cartItems.map((item, index) => (
              <li key={item.product.productId.toString() + index}>
                <CartItem cartItem={item} onItemRemove={onCartItemRemove} />
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between my-2">
              <h2>Subtotal</h2>
              <h2>${totalPrice}</h2>
            </div>
            <Button fill="parent">Checkout</Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5 items-top">
          <h3 className="py-4 uppercase ">
            Cart is empty :-( Please add products
          </h3>
          <Button fill="parent">Sign In</Button>
          <Button fill="parent" variant="outline">
            Continue Shopping
          </Button>
        </div>
      )}
    </SidePanel>
  );
}
