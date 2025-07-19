"use client";

import Button from "@sellify/common-ui-components/buttons/Button";

import { useMemo, useState } from "react";

import HomeIcon from "@sellify/common-icons/home";
import CreditCard from "@sellify/common-icons/credit-card";
import Clipboard from "@sellify/common-icons/clipboard";
import ProgressBar from "@sellify/customer-ui-components/progress/ProgressBar";
import CounterButton from "@sellify/customer-ui-components/CounterButton";

export default function Home() {
  const [count, setCount] = useState<number>(1);

  const barItems: Array<ProgressItemInfo> = useMemo(() => {
    const progressBarItems: Array<ProgressItemInfo> = [
      { href: "/", title: "Delivery Info", icon: <HomeIcon /> },
      { href: "/orders", title: "Payment Method", icon: <CreditCard /> },
      { href: "/review", title: "Review", icon: <Clipboard /> },
    ];
    return progressBarItems;
  }, []);

  return (
    <div className="flex-row gap-20">
      <div className="flex m-16 gap-10">
        <Button size="small">
          <p> Small Button</p>
        </Button>
        <Button size="small" variant="destructive">
          <p> Small Button</p>
        </Button>
        <Button size="small" variant="outline">
          <p> Small Button</p>
        </Button>
      </div>
      <div className="flex m-16 gap-10">
        <CounterButton
          count={count}
          onCountChange={setCount}
          min={1}
          max={10}
        />
        <CounterButton
          count={count}
          onCountChange={setCount}
          min={1}
          max={10}
          disabled
        />
      </div>
      <div className="flex m-16 gap-10">
        <ProgressBar barItems={barItems} pathname={"/"} />
      </div>
    </div>
  );
}
