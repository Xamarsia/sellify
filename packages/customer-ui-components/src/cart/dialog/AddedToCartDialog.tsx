import XMark from "@sellify/common-icons/x-mark";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";
import { useEffect, useRef } from "react";
import AddedToCartDialogContent from "./AddedToCartDialogContent";

type DialogProps = {
    dialogOpen: boolean,
    image: string;
    productTitle: string;
    price: number;
    amount: number;
    onDialogClose: () => void,
}

export default function AddedToCartDialog({ image, productTitle, price, amount, dialogOpen, onDialogClose }: DialogProps) {
    const modal = useRef<HTMLDivElement>(null);

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
        <div className={`fixed top-0 left-0 z-50 size-full 
            ${dialogOpen ? '' : 'hidden'}`}>
            <div ref={modal} className="bg-white w-full max-w-xl h-fit max-h-screen m-4 p-4 rounded-lg border border-stroke">
                <div className="flex justify-between items-center pb-4">
                    <h2>Added To Cart</h2>
                    <TransparentIconButton onClick={onDialogClose}>
                        <XMark style="size-6 stroke-current" />
                    </TransparentIconButton>
                </div>
                <AddedToCartDialogContent image={image} title={productTitle} price={price} amount={amount} />
            </div>
        </div>
    );
};
