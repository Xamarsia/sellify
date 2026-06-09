import type { StatusProps } from "@sellify/common-ui-components/statuses/types";

export const CUSTOMER_STATUS = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;

export type CustomerStatusVariant =
  (typeof CUSTOMER_STATUS)[keyof typeof CUSTOMER_STATUS];

type CustomerStatusProps = {
  readonly status: CustomerStatusVariant;
};

const customerStatusDefinitions = {
  [CUSTOMER_STATUS.ACTIVE]: {
    label: "Active",
    color: "text-essential-green",
  },
  [CUSTOMER_STATUS.ARCHIVED]: {
    label: "Archived",
    color: "text-placeholder",
  },
} satisfies Readonly<Record<CustomerStatusVariant, StatusProps>>;

export default function CustomerStatus({ status }: CustomerStatusProps) {
  const { label, color } = customerStatusDefinitions[status];

  return <span className={color}>{label}</span>;
}
