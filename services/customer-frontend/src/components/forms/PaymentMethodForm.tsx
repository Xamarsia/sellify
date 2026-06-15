"use client";

import { useCallback } from "react";

import RadioFormItem from "@sellify/common-ui-components/form/RadioFormItem";
import { PAYMENT_PROVIDER } from "@sellify/common-ui-components/constants";
import {
  PaymentMethodInfo,
  PaymentProvider as PaymentProviderType,
} from "@sellify/common-ui-components/types";

import { getPaymentProviders } from "actions/order-actions";

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
          return PAYMENT_PROVIDER.PAYPAL;
        case "CARD":
          return PAYMENT_PROVIDER.CARD;
        case "GOOGLE_PAY":
          return PAYMENT_PROVIDER.GOOGLE_PAY;
        default:
          return PAYMENT_PROVIDER.BALANCE;
      }
    },
    [],
  );

  const handleChange = useCallback(
    (isChecked: boolean, value?: string): void => {
      if (!value) {
        return;
      }
      const paymentProvider: PaymentProviderType = getPaymentProvider(value);
      //TODO Add Validation function here
      onPaymentMethodChange(paymentProvider, false);
    },
    [getPaymentProvider, onPaymentMethodChange],
  );

  return (
    <form className="flex w-full flex-col gap-8 pt-4">
      {Array.from(paymentMethods).map(([provider, info]) => {
        return (
          <RadioFormItem
            key={provider}
            label={info.title}
            value={provider}
            checked={currentMethod == provider}
            onChange={handleChange}
            disabled={!info.isAvailable}
          />
        );
      })}
    </form>
  );
}
