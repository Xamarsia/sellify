
"use client"

import Button from "@sellify/common-ui-components/buttons/Button";
import OrderSubtotal from "@sellify/customer-ui-components/OrderSubtotal";
import ProgressBar from "@sellify/customer-ui-components/progress/ProgressBar";
import { ProgressItemInfo } from "@sellify/customer-ui-components/types";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import TruckIcon from "@sellify/common-icons/truck";
import CubeIcon from "@sellify/common-icons/cube";
import CreditCard from "@sellify/common-icons/credit-card";
import Clipboard from "@sellify/common-icons/clipboard";

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname: string = usePathname();
    // const barItems = await  getCheckoutProgressBarItems();

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


    return (
        <div className="flex w-full flex-col gap-9 ">
            <h1>Shipping Details</h1>
            <div className="flex w-full justify-between gap-12 xl:gap-24 xl:flex-row flex-col">
                <div className="flex w-full flex-col gap-12 xl:gap-24">
                    {/* <CheckoutProgressBar /> */}
                    {currentBarItemOrder && <ProgressBar barItems={barItems} currentItem={currentBarItemOrder} />}
                    {/* <ProgressBar barItems={barItems} currentPathname={pathname} /> */}
                    <div className="flex w-full flex-col divide-y divide-stroke gap-6">
                        {children}
                    </div>
                </div>
                <div className="xl:w-min">
                    <OrderSubtotal itemsSubtotal={32} deliveryCharge={5} >
                        <Button fill="parent">Proceed to Checkout</Button>
                    </OrderSubtotal>
                </div>
            </div>
        </div>
    )
}
