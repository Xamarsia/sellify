import { PaymentMethodInfo } from "@sellify/common-ui-components/types";

type PaymentInfoProps = {
  paymentMethodInfo: PaymentMethodInfo;
};

export default function PaymentInfo({ paymentMethodInfo }: PaymentInfoProps) {
  return (
    <>
      <p> {paymentMethodInfo.title} </p>
    </>
  );
}
