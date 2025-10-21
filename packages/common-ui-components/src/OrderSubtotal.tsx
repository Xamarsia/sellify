import { ReactNode } from "react";

type Props = {
  itemsSubtotal: number;
  deliveryFee: number;
  totalPrice: number;
  children?: ReactNode;
};

export default function OrderSubtotal({
  itemsSubtotal,
  deliveryFee,
  totalPrice,
  children: controlPanel,
}: Props) {
  return (
    <div className="flex flex-col justify-between bg-white h-72 min-w-80 w-full p-4 rounded-lg border border-stroke">
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-between">
          <h4>Item(s) Subtotal</h4>
          <h4>${itemsSubtotal.toFixed(2)}</h4>
        </div>
        <div className="w-full flex justify-between body">
          <p>Delivery Charge</p>
          <p>${deliveryFee.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-between body">
          <h3>Total Cost</h3>
          <h3>${totalPrice.toFixed(2)}</h3>
        </div>
        {controlPanel}
      </div>
    </div>
  );
}
