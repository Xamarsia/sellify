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
        /*
          `overflow-y-auto` clips focus rings on elements inside.
          Adding `-m-3 p-3` provides enough horizontal and vertical space to keep them visible.
        */
        <div className="flex grow flex-col justify-between h-full gap-5 overflow-y-auto -m-3 p-3">
          <ul className="flex flex-col gap-4 scrollbar overflow-y-auto pr-4 -mx-3 px-3">
            {cartItems.map((item, index) => (
              <li key={item.product.productId.toString() + index}>
                <CartItem cartItem={item} onItemRemove={onCartItemRemove} />
              </li>
            ))}
          </ul>
          <div className="flex flex-col shrink-0 gap-4">
            <div className="flex justify-between">
              <h2>Subtotal</h2>
              <h2>${totalPrice}</h2>
            </div>
            {/* TODO: Enhance button and link relationships to ensure proper functionality*/}
            <a href={`/checkout-order`}>
              <Button>Checkout</Button>
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5 items-top">
          <h3 className="py-4 uppercase ">
            Cart is empty :-( Please add products
          </h3>
          <Button>Sign In</Button>
          <Button variant="outline">Continue Shopping</Button>
        </div>
      )}
    </SidePanel>
  );
}
