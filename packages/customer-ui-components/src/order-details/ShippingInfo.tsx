import { ContactInfo, DeliveryAddress } from "types";

type ShippingInfoProps = {
  contactInfo: ContactInfo;
  deliveryAddress: DeliveryAddress;
};

export default function ShippingInfo({
  contactInfo,
  deliveryAddress,
}: ShippingInfoProps) {
  return (
    <div className="flex flex-col w-full gap-4">
      <h4>{contactInfo.fullName}</h4>
      <p>{`Phone: ${contactInfo.phoneNumber}`}</p>
      <p>{`Delivery address: ${deliveryAddress.address}, ${deliveryAddress.country}`}</p>
    </div>
  );
}
