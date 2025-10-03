"use client";

import { ChangeEvent, useCallback } from "react";

import Radio from "@sellify/common-ui-components/input/Radio";
import { PaymentProvider } from "@sellify/common-ui-components/constants";
import {
  PaymentMethodInfo,
  PaymentProvider as PaymentProviderType,
} from "@sellify/common-ui-components/types";

import { getPaymentProviders } from "common/actions/order-actions";

type PaymentMethodProps = {
  currentMethod: PaymentProviderType;
  onPaymentMethodChange: (
    provider: PaymentProviderType,
    isValid: boolean,
  ) => void;
};

export default function PaymentMethodForm({
  currentMethod,
  onPaymentMethodChange,
}: PaymentMethodProps) {
  const paymentMethods: Map<PaymentProviderType, PaymentMethodInfo> =
    getPaymentProviders();

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
      const paymentProvider: PaymentProviderType = getPaymentProvider(
        e.target.value,
      );
      //TODO Add Validation function here
      onPaymentMethodChange(paymentProvider, false);
    },
    [onPaymentMethodChange],
  );

  return (
    <div className="flex w-full flex-col gap-8 pt-4">
      {Array.from(paymentMethods).map(([provider, info]) => {
        return (
          <Radio
            key={provider}
            label={info.title}
            value={provider}
            checked={currentMethod == provider}
            onChange={handleChange}
            disabled={!info.isAvailable}
          />
        );
      })}
    </div>
  );
}
