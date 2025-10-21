import { PaymentMethodInfo } from "@sellify/common-ui-components/types";

type PaymentInfoProps = {
  paymentMethodInfo: PaymentMethodInfo;
};

export default function PaymentInfo({ paymentMethodInfo }: PaymentInfoProps) {
  return (
    <div className="flex flex-col w-full gap-4">
      <p> {paymentMethodInfo.title} </p>
    </div>
  );
}
