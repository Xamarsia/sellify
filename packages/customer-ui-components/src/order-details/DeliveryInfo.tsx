import { OrderDetails } from "../types";

type DeliveryInfoProps = {
  order: OrderDetails;
};

export default function DeliveryInfo({ order }: DeliveryInfoProps) {
  return (
    <>
      <p>{`Tracking ID: ${order.trackingDeliveryId}`}</p>
      <p>{`Estimated delivery date: ${order.deliveryDate}`}</p>
      <p>{`Delivery charge: $${order.deliveryFee}`}</p>
    </>
  );
}
