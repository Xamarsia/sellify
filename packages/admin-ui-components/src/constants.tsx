export const OrderStatus = {
  New: "NEW",
  InProgress: "IN_PROGRESS",
  Shipped: "SHIPPED",
  Canceled: "CANCELED",
} as const;

export const ProductStatus = {
  Active: "ACTIVE",
  Archived: "ARCHIVED",
} as const;

export const AdminStatus = {
  Active: "ACTIVE",
  Invited: "INVITED",
  Disabled: "DISABLED",
} as const;

export const CustomerStatus = {
  Active: "ACTIVE",
  Archived: "ARCHIVED",
} as const;
