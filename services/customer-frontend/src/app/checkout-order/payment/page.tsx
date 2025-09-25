"use client";

import { useState } from "react";

import FormSection from "@sellify/customer-ui-components/forms/FormSection";
import PaymentMethodForm from "@sellify/customer-ui-components/forms/PaymentMethodForm";

import { getPaymentProviders } from "common/actions/order-actions";
import {
  PaymentMethodInfo,
  PaymentProvider as PaymentProviderType,
} from "@sellify/common-ui-components/types";
import { PaymentProvider } from "@sellify/common-ui-components/constants";

export default function PaymentPage() {
  const paymentMethods: Map<PaymentProviderType, PaymentMethodInfo> =
    getPaymentProviders();
  const [paymentProvider, setPaymentProvider] = useState<PaymentProviderType>(
    PaymentProvider.Balance,
  );

  return (
    <>
      <FormSection title="Select a payment Method">
        <PaymentMethodForm
          paymentMethods={paymentMethods}
          currentMethod={paymentProvider}
          onPaymentMethodChange={setPaymentProvider}
        />
      </FormSection>
    </>
  );
}
