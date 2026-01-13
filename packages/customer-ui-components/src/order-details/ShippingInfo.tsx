import { ContactInfo, DeliveryAddress } from "../types";

type ShippingInfoProps = {
  contactInfo: ContactInfo;
  deliveryAddress: DeliveryAddress;
};

export default function ShippingInfo({
  contactInfo,
  deliveryAddress,
}: ShippingInfoProps) {
  return (
    <>
      <p>{contactInfo.fullName}</p>
      <p>{`Phone: ${contactInfo.phoneNumber}`}</p>
      <p>{`Delivery address: ${deliveryAddress.address}, ${deliveryAddress.country}`}</p>
    </>
  );
}
