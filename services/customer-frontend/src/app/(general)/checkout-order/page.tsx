"use client";

import { useCallback, useContext, useMemo, useState } from "react";

import ShoppingBagIcon from "@sellify/common-icons/shopping-bag";

import Button from "@sellify/common-ui-components/buttons/Button";
import FormSection from "@sellify/common-ui-components/FormSection";
import OrderSubtotal from "@sellify/common-ui-components/OrderSubtotal";
import { PaymentProvider } from "@sellify/common-ui-components/constants";
import { PaymentProvider as PaymentProviderType } from "@sellify/common-ui-components/types";

import CheckoutProductsView from "@sellify/customer-ui-components/data-view/CheckoutProductsView";

import {
  CartItem,
  ContactInfo,
  DeliveryAddress,
  OrderRequest,
} from "@sellify/customer-ui-components/types";

import { CheckoutStep } from "enums";
import {
  AlertDialogController,
  AlertDialogContent,
  ProgressBarContent,
} from "types";

import CheckoutProgressBar from "components/CheckoutProgressBar";
import CheckoutReviewForm from "components/forms/CheckoutReviewForm";
import ContactInfoForm from "components/forms/ContactInfoForm";
import DeliveryAddressForm from "components/forms/DeliveryAddressForm";
import PaymentMethodForm from "components/forms/PaymentMethodForm";

import { AlertDialogContext } from "common/contexts/common-context";

import { getDeliveryFee, order } from "common/actions/order-actions";
import { getProductMaxQuantity } from "common/actions/product-actions";
import {
  changeCartItemQuantity,
  getCartItems,
  removeCartItem,
} from "common/actions/cart-actions";
import {
  getDefaultContactInfo,
  getDefaultDeliveryAddress,
  updateDefaultContactInfo,
  updateDefaultDeliveryAddress,
} from "common/actions/profile-actions";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Array<CartItem>>(getCartItems());
  const [paymentProvider, setPaymentProvider] = useState<PaymentProviderType>(
    PaymentProvider.Balance,
  );
  const [deliveryFee, setDeliveryFee] = useState<number>(getDeliveryFee());
  const [contactInfo, setContactInfo] = useState<ContactInfo | undefined>(
    getDefaultContactInfo(),
  );
  const [deliveryAddress, setDeliveryAddress] = useState<
    DeliveryAddress | undefined
  >(getDefaultDeliveryAddress());

  const [isContactInfoValid, setIsContactInfoValid] = useState<boolean>(true);
  const [isDeliveryAddressValid, setIsDeliveryAddressValid] =
    useState<boolean>(true);
  const [isPaymentProviderValid, setIsPaymentProviderValid] =
    useState<boolean>(true);

  const [isDefaultContactInfo, setDefaultContactInfo] = useState<boolean>(true);
  const [isDefaultDeliveryAddress, setDefaultDeliveryAddress] =
    useState<boolean>(true);

  const [currentStep, setCurrentStep] = useState<CheckoutStep>(
    CheckoutStep.SELECTED_PRODUCTS,
  );

  const { showAlertDialog } =
    useContext<AlertDialogController>(AlertDialogContext);

  const itemsSubtotalPrice = useMemo<number>(() => {
    return cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.product.price * currentValue.amount;
    }, 0);
  }, [cartItems]);

  const totalPrice = useMemo<number>(() => {
    return +(itemsSubtotalPrice + deliveryFee).toFixed(2);
  }, [itemsSubtotalPrice, deliveryFee]);

  const onOrder = useCallback((): void => {
    if (!contactInfo || !deliveryAddress) {
      // TODO Handle error
      return;
    }
    const orderRequest: OrderRequest = {
      contactInfo: contactInfo,
      deliveryAddress: deliveryAddress,
      paymentProvider: paymentProvider,
      products: cartItems,
      deliveryFee: deliveryFee,
      itemsSubtotal: itemsSubtotalPrice,
      totalPrice: totalPrice,
    };
    order(orderRequest);
    if (isDefaultContactInfo) {
      updateDefaultContactInfo(contactInfo);
    }
    if (isDefaultDeliveryAddress) {
      updateDefaultDeliveryAddress(deliveryAddress);
    }

    const alertDialogContent: AlertDialogContent = {
      icon: <ShoppingBagIcon />,
      title: "Thanks for shopping!",
      description:
        "Your order hasn't shipped yet, but we will send you and email when it done.",
      controlPanel: (
        <>
          <Button variant="outline" fill="parent">
            Back to home
          </Button>
          <Button fill="parent">View Order</Button>
        </>
      ),
    };

    showAlertDialog(alertDialogContent);
  }, [
    contactInfo,
    deliveryAddress,
    paymentProvider,
    cartItems,
    deliveryFee,
    itemsSubtotalPrice,
    totalPrice,
  ]);

  const onDeliveryAddressChange = useCallback(
    (
      address: DeliveryAddress,
      isValid: boolean,
      isSetAsDefault: boolean,
    ): void => {
      setDeliveryAddress(address);
      setDefaultDeliveryAddress(isSetAsDefault);
      setIsDeliveryAddressValid(isValid);
    },
    [],
  );

  const onContactInfoChange = useCallback(
    (info: ContactInfo, isValid: boolean, isSetAsDefault: boolean): void => {
      setContactInfo(info);
      setDefaultContactInfo(isSetAsDefault);
      setIsContactInfoValid(isValid);
    },
    [],
  );

  const onPaymentProviderChange = useCallback(
    (provider: PaymentProviderType, isValid: boolean): void => {
      setPaymentProvider(provider);
      setIsPaymentProviderValid(isValid);
    },
    [],
  );

  const currentTitle = useMemo<string | undefined>(() => {
    const titles = new Map<CheckoutStep, string>([
      [CheckoutStep.SELECTED_PRODUCTS, "Order Preview"],
      [CheckoutStep.DELIVERY_INFO, "Shipping Details"],
      [CheckoutStep.PAYMENT_METHOD, "Payment Method"],
      [CheckoutStep.REVIEW, "Review Your Order"],
    ]);
    return titles.get(currentStep);
  }, [currentStep]);

  const currentStepContent = useMemo<ProgressBarContent | undefined>(() => {
    const contents = new Map<CheckoutStep, ProgressBarContent>([
      [
        CheckoutStep.SELECTED_PRODUCTS,
        {
          isValid: cartItems.length > 0,
          content: (
            <FormSection title="Products List">
              <CheckoutProductsView
                content={cartItems}
                onItemRemove={removeCartItem}
                getProductMaxQuantity={getProductMaxQuantity}
                onCartItemQuantityChanged={changeCartItemQuantity}
              />
            </FormSection>
          ),
        },
      ],
      [
        CheckoutStep.DELIVERY_INFO,
        {
          isValid: isDeliveryAddressValid && isContactInfoValid,
          content: (
            <>
              <FormSection title="Contact Information">
                <ContactInfoForm
                  contactInfo={contactInfo}
                  onChange={onContactInfoChange}
                />
              </FormSection>
              <FormSection title="Delivery address">
                <DeliveryAddressForm
                  deliveryAddress={deliveryAddress}
                  onChange={onDeliveryAddressChange}
                />
              </FormSection>
            </>
          ),
        },
      ],
      [
        CheckoutStep.PAYMENT_METHOD,
        {
          isValid: isPaymentProviderValid,
          content: (
            <FormSection title="Select a payment Method">
              <PaymentMethodForm
                currentMethod={paymentProvider}
                onPaymentMethodChange={onPaymentProviderChange}
              />
            </FormSection>
          ),
        },
      ],
      [
        CheckoutStep.REVIEW,
        {
          isValid:
            cartItems.length > 0 &&
            isDeliveryAddressValid &&
            isContactInfoValid &&
            isPaymentProviderValid,
          content: contactInfo && deliveryAddress && (
            <CheckoutReviewForm
              contactInfo={contactInfo}
              deliveryAddress={deliveryAddress}
              paymentProvider={paymentProvider}
              cartItems={cartItems}
            />
          ),
        },
      ],
    ]);
    return contents.get(currentStep);
  }, [
    cartItems,
    contactInfo,
    deliveryAddress,
    paymentProvider,
    currentStep,
    isPaymentProviderValid,
    isDeliveryAddressValid,
    isContactInfoValid,
  ]);

  const onNextStep = useCallback(() => {
    if (currentStepContent?.isValid) {
      if (currentStep < CheckoutStep.REVIEW) {
        setCurrentStep(currentStep + 1);
      } else {
        onOrder();
      }
      // Scroll To Top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentStepContent, currentStep]);

  return (
    <div className="flex w-full flex-col gap-12">
      <h1>{currentTitle}</h1>
      <div className="flex w-full justify-between gap-12 xl:gap-16 xl:flex-row flex-col">
        <div className="flex w-full flex-col gap-12 xl:gap-16">
          <CheckoutProgressBar
            currentStep={currentStep}
            onStepClick={setCurrentStep}
          />
          <div className="flex w-full flex-col gap-12">
            {currentStepContent?.content}
          </div>
        </div>
        <div className="xl:w-min">
          <OrderSubtotal
            itemsSubtotal={itemsSubtotalPrice}
            totalPrice={totalPrice}
            deliveryFee={5}
          >
            <Button
              fill="parent"
              disabled={!currentStepContent?.isValid}
              onClick={onNextStep}
            >
              {currentStep < CheckoutStep.REVIEW
                ? "Confirm and Proceed"
                : "Final Confirm"}
            </Button>
          </OrderSubtotal>
        </div>
      </div>
    </div>
  );
}
