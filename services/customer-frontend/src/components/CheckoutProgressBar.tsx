"use client";

import { useMemo } from "react";

import TruckIcon from "@sellify/common-icons/truck";
import CubeIcon from "@sellify/common-icons/cube";
import CreditCard from "@sellify/common-icons/credit-card";
import Clipboard from "@sellify/common-icons/clipboard";

import { ProgressStepInfo } from "@sellify/customer-ui-components/types";
import ProgressBar from "@sellify/customer-ui-components/progress/ProgressBar";
import { CheckoutStep } from "enums";

type CheckoutProgressBarProps = {
  currentStep: CheckoutStep;
  onStepClick: (step: CheckoutStep) => void;
};

export default function CheckoutProgressBar({
  currentStep,
  onStepClick,
}: CheckoutProgressBarProps) {
  const barItems = useMemo<Array<ProgressStepInfo>>(() => {
    const progressBarItems = [
      {
        step: CheckoutStep.SELECTED_PRODUCTS,
        title: "Products",
        icon: <CubeIcon />,
      },
      {
        step: CheckoutStep.DELIVERY_INFO,
        title: "Delivery Info",
        icon: <TruckIcon />,
      },
      {
        step: CheckoutStep.PAYMENT_METHOD,
        title: "Payment Method",
        icon: <CreditCard />,
      },
      {
        step: CheckoutStep.REVIEW,
        title: "Review",
        icon: <Clipboard />,
      },
    ];
    return progressBarItems;
  }, []);

  return (
    <ProgressBar
      steps={barItems}
      currentStep={currentStep}
      onStepClick={onStepClick}
    />
  );
}
