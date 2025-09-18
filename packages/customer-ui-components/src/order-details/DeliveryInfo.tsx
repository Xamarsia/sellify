import { Order } from "../types";

type DeliveryInfoProps = {
  order: Order;
};

export default function DeliveryInfo({ order }: DeliveryInfoProps) {
  return (
    <div className="flex flex-col w-full gap-4">
      <p>{`Tracking ID: ${order.trackingDeliveryId}`}</p>
      <p>{`Estimated delivery date: ${order.deliveryDate}`}</p>
      <p>{`Delivery charge: $${order.deliveryCharge}`}</p>
    </div>
  );
}
