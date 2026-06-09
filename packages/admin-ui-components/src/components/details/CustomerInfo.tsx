import { Customer } from "../../types";

import CustomerStatusComponent from "../../statuses/CustomerStatus";

type CustomerInfoProps = {
  customer: Customer;
};

export default function CustomerInfo({ customer }: CustomerInfoProps) {
  return (
    <>
      <div className="flex w-full gap-4">
        <p>{`Status:`}</p>
        <CustomerStatusComponent status={customer.status} />
      </div>
      <p>{`Customer Since: ${customer.createdOn}`}</p>
    </>
  );
}
