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
      <h4>{contactInfo.fullName}</h4>
      <p>{`Phone: ${contactInfo.phoneNumber}`}</p>
      <p>{`Delivery address: ${deliveryAddress.address}, ${deliveryAddress.country}`}</p>
    </>
  );
}
