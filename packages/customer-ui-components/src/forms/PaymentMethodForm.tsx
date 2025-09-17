"use client";

import { ChangeEvent, useCallback } from "react";

import Radio from "@sellify/common-ui-components/input/Radio";
import { PaymentProvider } from "@sellify/common-ui-components/constants";
import {
  PaymentMethodInfo,
  PaymentProvider as PaymentProviderType,
} from "@sellify/common-ui-components/types";

type PaymentMethodProps = {
  paymentMethods: Map<PaymentProviderType, PaymentMethodInfo>;
  currentMethod: PaymentProviderType;
  onPaymentMethodChange: (provider: PaymentProviderType) => void;
};

export default function PaymentMethodForm({
  currentMethod,
  onPaymentMethodChange,
  paymentMethods,
}: PaymentMethodProps) {
  const getPaymentProvider = useCallback(
    (value: string): PaymentProviderType => {
      switch (value) {
        case "PAYPAL":
          return PaymentProvider.Paypal;
        case "CARD":
          return PaymentProvider.Card;
        case "GOOGLE_PAY":
          return PaymentProvider.GooglePay;
        default:
          return PaymentProvider.Balance;
      }
    },
    [],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value;
      onPaymentMethodChange(getPaymentProvider(value));
    },
    [onPaymentMethodChange],
  );

  return (
    <div className="flex w-full flex-col">
      {Array.from(paymentMethods).map(([provider, info]) => {
        return (
          <div className="border-b border-stroke py-8" key={provider}>
            <Radio
              label={info.title}
              value={provider}
              checked={currentMethod == provider}
              onChange={handleChange}
              disabled={!info.isAvailable}
            />
          </div>
        );
      })}
    </div>
  );
}
