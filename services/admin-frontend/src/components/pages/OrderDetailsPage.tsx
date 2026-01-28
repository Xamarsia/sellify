"use client";

import { PaymentMethodInfo } from "@sellify/common-ui-components/types";

import InfoSection from "@sellify/admin-ui-components/InfoSection";
import OrderInfo from "@sellify/admin-ui-components/details/OrderInfo";
import ShippingInfo from "@sellify/admin-ui-components/details/ShippingInfo";
import PaymentInfo from "@sellify/admin-ui-components/details/PaymentInfo";
import OrderProductsView from "@sellify/admin-ui-components/data-view/OrderProductsView";
import { OrderDetails } from "@sellify/admin-ui-components/types";

import Filter from "components/Filter";
import { OrderProductsFilterSections } from "filter-sections/orders-filter";
import { useState } from "react";

type Props = {
  order: OrderDetails;
  paymentMethodInfo?: PaymentMethodInfo;
  customerName: string;
};

export default function OrderDetailsPage({
  order,
  paymentMethodInfo,
  customerName,
}: Props) {
  const [page, setPage] = useState<number>(1);

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
        <Filter filterSections={OrderProductsFilterSections} />
        <OrderProductsView
          content={order.products}
          currentPage={page}
          onPageChanged={setPage}
          pagesAmount={10}
        />
      </InfoSection>
    </>
  );
}
