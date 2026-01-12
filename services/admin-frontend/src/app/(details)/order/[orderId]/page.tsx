import "server-only";

import { PaymentMethodInfo } from "@sellify/common-ui-components/types";

import InfoSection from "@sellify/admin-ui-components/InfoSection";
import OrderInfo from "@sellify/admin-ui-components/details/OrderInfo";
import ShippingInfo from "@sellify/admin-ui-components/details/ShippingInfo";
import PaymentInfo from "@sellify/admin-ui-components/details/PaymentInfo";
import OrderProductsView from "@sellify/admin-ui-components/data-view/OrderProductsView";
import { OrderDetails } from "@sellify/admin-ui-components/types";

import {
  getOrderById,
  getPaymentMethodInfo,
} from "common/actions/order-actions";
import { getCustomerNameById } from "common/actions/customer-actions";

type Props = {
  params: Promise<{ orderId: number }>;
};

export default async function OrderPage({ params }: Props) {
  const orderId: number = (await params).orderId;
  const order: OrderDetails = getOrderById(orderId);
  const paymentMethodInfo: PaymentMethodInfo | undefined = getPaymentMethodInfo(
    order.paymentProvider,
  );
  const customerName = getCustomerNameById(order.customerId);

  return (
    <>
      <h1 className="py-4">{`Order: #${order.customerId}`}</h1>

      <InfoSection title="Order Details">
        <OrderInfo
          customerId={order.customerId}
          orderStatus={order.status}
          customerName={customerName}
          purchaseDate={order.purchaseDate}
        />
      </InfoSection>

      <InfoSection title="Shipping Info">
        <ShippingInfo
          contactInfo={order.contactInfo}
          deliveryAddress={order.deliveryAddress}
        />
      </InfoSection>

      {paymentMethodInfo && (
        <InfoSection title="Payment Method">
          <PaymentInfo paymentMethodInfo={paymentMethodInfo} />
        </InfoSection>
      )}

      <InfoSection title="Products">
        <OrderProductsView content={order.products} />
      </InfoSection>
    </>
  );
}
