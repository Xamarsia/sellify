"use client"

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import TruckIcon from "@sellify/common-icons/truck";
import CubeIcon from "@sellify/common-icons/cube";
import CreditCard from "@sellify/common-icons/credit-card";
import Clipboard from "@sellify/common-icons/clipboard";

import { ProgressItemInfo } from "@sellify/customer-ui-components/types";
import ProgressBar from "@sellify/customer-ui-components/progress/ProgressBar";

export default function CheckoutProgressBar() {
  const pathname: string = usePathname();

  enum ProgressBarItemOrder {
    SELECTED_PRODUCTS = 1,
    DELIVERY_INFO = 2,
    PAYMENT_METHOD = 3,
    REVIEW = 4,
  }

  const currentBarItemOrder = useMemo((): number | undefined => {
    switch (pathname) {
      case "/checkout-order":
        return ProgressBarItemOrder.SELECTED_PRODUCTS;
      case "/checkout-order/shipping":
        return ProgressBarItemOrder.DELIVERY_INFO;
      case "/checkout-order/payment":
        return ProgressBarItemOrder.PAYMENT_METHOD;
      case "/checkout-order/review":
        return ProgressBarItemOrder.REVIEW;
      default:
        return undefined;
    }
  }, [pathname]);


  const barItems: Array<ProgressItemInfo> = useMemo(() => {
    const progressBarItems: Array<ProgressItemInfo> = [
      {
        href: "/checkout-order",
        title: "Selected Products",
        icon: <CubeIcon />,
      },
      {
        href: "/checkout-order/shipping",
        title: "Delivery Info",
        icon: <TruckIcon />,
      },
      {
        href: "/checkout-order/payment",
        title: "Payment Method",
        icon: <CreditCard />,
      },
      {
        href: "/checkout-order/review",
        title: "Review",
        icon: <Clipboard />,
      },
    ];
    return progressBarItems;
  }, []);

  return (currentBarItemOrder && <ProgressBar barItems={barItems} currentItem={currentBarItemOrder} />);
}
