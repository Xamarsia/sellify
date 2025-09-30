import { OrderDetails } from "../types";

type DeliveryInfoProps = {
  order: OrderDetails;
};

export default function DeliveryInfo({ order }: DeliveryInfoProps) {
  return (
    <div className="flex flex-col w-full gap-4">
      <p>{`Tracking ID: ${order.trackingDeliveryId}`}</p>
      <p>{`Estimated delivery date: ${order.deliveryDate}`}</p>
      <p>{`Delivery charge: $${order.deliveryFee}`}</p>
    </div>
  );
}
