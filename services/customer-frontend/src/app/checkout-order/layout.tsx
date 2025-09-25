import Button from "@sellify/common-ui-components/buttons/Button";
import OrderSubtotal from "@sellify/customer-ui-components/OrderSubtotal";
import CheckoutProgressBar from "components/CheckoutProgressBar";


export default async function OrderCheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="flex w-full flex-col gap-9 ">
      <h1>Shipping Details</h1>
      <div className="flex w-full justify-between gap-12 xl:gap-24 xl:flex-row flex-col">
        <div className="flex w-full flex-col gap-12 xl:gap-24">
          <CheckoutProgressBar />
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
