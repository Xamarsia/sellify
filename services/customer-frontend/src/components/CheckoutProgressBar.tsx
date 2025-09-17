import { useMemo } from "react";

import HomeIcon from "@sellify/common-icons/home";
import CreditCard from "@sellify/common-icons/credit-card";
import Clipboard from "@sellify/common-icons/clipboard";

import ProgressBar from "@sellify/customer-ui-components/progress/ProgressBar";
import { ProgressItemInfo } from "@sellify/customer-ui-components/types";

type ProgressBarProps = {
  currentPathname: string;
};

export default function CheckoutProgressBar({
  currentPathname,
}: ProgressBarProps) {
  const barItems: Array<ProgressItemInfo> = useMemo(() => {
    const progressBarItems: Array<ProgressItemInfo> = [
      {
        href: "/checkout-order/shipping",
        title: "Delivery Info",
        icon: <HomeIcon />,
      },
      {
        href: "/checkout-order/payment",
        title: "Payment Method",
        icon: <CreditCard />,
      },
      { href: "/checkout-order/review", title: "Review", icon: <Clipboard /> },
    ];
    return progressBarItems;
  }, []);

  return <ProgressBar barItems={barItems} currentPathname={currentPathname} />;
}
