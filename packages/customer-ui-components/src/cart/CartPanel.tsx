import XMark from "@sellify/common-icons/x-mark";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";
import { useEffect, useMemo, useRef } from "react";
import CartItem from "./CartItem";
import Button from "@sellify/common-ui-components/buttons/Button";

type DialogProps = {
    dialogOpen: boolean,
    onDialogClose: () => void,
    cartItems: Array<CartItem>;
    onItemRemove: (productId: number) => void;
}

export default function CartPanel({ dialogOpen, onDialogClose, cartItems, onItemRemove }: DialogProps) {
    const modal = useRef<HTMLDivElement>(null);
    const totalPrice = useMemo((): number => {
        return cartItems.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.product.price * currentValue.amount);
        }, 0);
    }, [cartItems]);

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (dialogOpen && !modal.current?.contains(e.target as Node)) {
                onDialogClose();
            }
        }
        if (dialogOpen) {
            document.addEventListener('mousedown', onClickOutside);
        } else {
            document.removeEventListener('mousedown', onClickOutside);
        }
    }, [onDialogClose, dialogOpen]);

    return (
        <div className={`size-full ${dialogOpen ? '' : 'hidden'}`}>
            <div ref={modal} className="flex flex-col justify-between h-full bg-white max-w-xl max-h-screen p-8 rounded-lg border border-stroke">
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <h2>Cart</h2>
                        <TransparentIconButton onClick={onDialogClose} >
                            <XMark style="size-6 stroke-current" />
                        </TransparentIconButton>
                    </div>
                    <ul className="flex flex-col gap-4">
                        {cartItems.map((item, index) =>
                            <li key={item.product.productId.toString() + index}>
                                <CartItem cartItem={item} onItemRemove={onItemRemove} />
                            </li>
                        )}
                    </ul>

                    <div className="flex justify-between my-2">
                        <h2>Subtotal</h2>
                        <h2>${totalPrice}</h2>
                    </div>
                </div>

                <Button fill="parent">
                    Checkout
                </Button>
            </div>
        </div>
    );
};
