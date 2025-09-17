"use client";

import { useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";

import OrderSubtotal from "@sellify/customer-ui-components/OrderSubtotal";
import FormSection from "@sellify/customer-ui-components/forms/FormSection";
import PaymentMethodForm from "@sellify/customer-ui-components/forms/PaymentMethodForm";

import CheckoutProgressBar from "components/CheckoutProgressBar";
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
    <div className="flex w-full flex-col gap-9 ">
      <h1>Payment Method</h1>
      <div className="flex w-full justify-between gap-12 xl:gap-24 xl:flex-row flex-col">
        <div className="flex w-full flex-col gap-12 xl:gap-24">
          <CheckoutProgressBar currentPathname={"/checkout-order/payment"} />

          <div className="flex w-full flex-col divide-y divide-stroke gap-6">
            <FormSection title="Select a payment Method">
              <PaymentMethodForm
                paymentMethods={paymentMethods}
                currentMethod={paymentProvider}
                onPaymentMethodChange={setPaymentProvider}
              />
            </FormSection>
          </div>
        </div>
        <div className="xl:w-min">
          <OrderSubtotal totalPrice={32} deliveryCharge={5}>
            <Button fill="parent">Continue</Button>
          </OrderSubtotal>
        </div>
      </div>
    </div>
  );
}
