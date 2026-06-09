import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import OrderStatusComponent, {
  type OrderStatusVariant,
} from "@sellify/common-ui-components/statuses/OrderStatus";

type OrderInfoProps = {
  orderStatus: OrderStatusVariant;
  customerId: number;
  customerName: string;
  purchaseDate: string;
};

export default function OrderInfo({
  orderStatus,
  customerId,
  customerName,
  purchaseDate,
}: OrderInfoProps) {
  return (
    <>
      <div className="flex w-full gap-4">
        <p>{`Status:`}</p>
        <OrderStatusComponent status={orderStatus} />
      </div>
      <div className="flex w-full items-center gap-4">
        <p>{`Customer:`}</p>
        <LinkButton href={`/customer/${customerId}`}>
          <h4>{customerName}</h4>
        </LinkButton>
      </div>
      <p>{`Purchase date: ${purchaseDate}`}</p>
    </>
  );
}
