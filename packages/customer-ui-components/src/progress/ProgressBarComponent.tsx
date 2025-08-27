import { useMemo } from "react";

import HomeIcon from "@sellify/common-icons/home";
import CreditCard from "@sellify/common-icons/credit-card";
import Clipboard from "@sellify/common-icons/clipboard";

import ProgressBar from "./ProgressBar";

type ProgressBarProps = {
  currentPathname: string;
};

export default function ProgressBarComponent({
  currentPathname,
}: ProgressBarProps) {
  const barItems: Array<ProgressItemInfo> = useMemo(() => {
    const progressBarItems: Array<ProgressItemInfo> = [
      { href: "/", title: "Delivery Info", icon: <HomeIcon /> },
      { href: "/orders", title: "Payment Method", icon: <CreditCard /> },
      { href: "/review", title: "Review", icon: <Clipboard /> },
    ];
    return progressBarItems;
  }, []);

  return <ProgressBar barItems={barItems} currentPathname={currentPathname} />;
}
