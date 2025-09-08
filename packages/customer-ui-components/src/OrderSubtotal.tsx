import Button from "@sellify/common-ui-components/buttons/Button";

type Props = {
  totalPrice: number;
  deliveryCharge: number;
};

export default function OrderSubtotal({ totalPrice, deliveryCharge }: Props) {
  return (
    <div className="flex flex-col justify-between bg-white h-[284px] w-[292px] p-4 rounded-lg border border-stroke">
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-between">
          <h4>Subtotal</h4>
          <h4>${totalPrice}</h4>
        </div>
        <div className="w-full flex justify-between body">
          <p>Delivery Charge</p>
          <p>${deliveryCharge}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-between body">
          <h3>Grand Total</h3>
          <h3>${totalPrice + deliveryCharge}</h3>
        </div>
        <Button fill="parent">Continue</Button>
      </div>
    </div>
  );
}
