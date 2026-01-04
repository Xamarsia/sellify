import { CustomerStatus } from "@sellify/admin-ui-components/constants";
import { Customer } from "@sellify/admin-ui-components/types";

const customer: Customer = {
  customerId: 213234,
  name: "Ronald Jones",
  ordersCount: 0,
  totalExpenses: 234.43,
  status: CustomerStatus.Active,
};

const customer2: Customer = {
  customerId: 34543345675673,
  name: "LongUnbreakableCustomerName|LongUnbreakableCustomerNameLongUnbreakableCustomerName",
  ordersCount: 5,
  totalExpenses: 65656.43,
  status: CustomerStatus.Archived,
};

const customer3: Customer = {
  customerId: 34,
  name: "Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name | Long Customer Name",
  ordersCount: 2324,
  totalExpenses: 4545645656776,
  status: CustomerStatus.Active,
};

export function filterCustomers(query: string): Array<Customer> {
  return [customer, customer3];
}

export function getCustomers(): Array<Customer> {
  return [
    customer3,
    customer,
    customer2,
    customer3,
    customer,
    customer,
    customer2,
    customer,
    customer3,
    customer3,
    customer2,
    customer,
    customer3,
    customer2,
    customer,
    customer,
    customer2,
    customer2,
    customer3,
    customer,
    customer2,
    customer,
    customer,
    customer3,
  ];
}
