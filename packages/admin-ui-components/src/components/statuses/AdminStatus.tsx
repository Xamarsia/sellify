import type { StatusProps } from "../../../common-ui-components/src/components/statuses/types";

export const ADMIN_STATUS = {
  ACTIVE: "ACTIVE",
  INVITED: "INVITED",
  DISABLED: "DISABLED",
} as const;

export type AdminStatusVariant =
  (typeof ADMIN_STATUS)[keyof typeof ADMIN_STATUS];

type AdminStatusProps = {
  readonly status: AdminStatusVariant;
};

const adminStatusDefinitions = {
  [ADMIN_STATUS.ACTIVE]: {
    label: "Active",
    color: "text-essential-green",
  },
  [ADMIN_STATUS.INVITED]: {
    label: "Invited",
    color: "text-essential-red",
  },
  [ADMIN_STATUS.DISABLED]: {
    label: "Disabled",
    color: "text-placeholder",
  },
} satisfies Readonly<Record<AdminStatusVariant, StatusProps>>;

export default function AdminStatus({ status }: AdminStatusProps) {
  const { label, color } = adminStatusDefinitions[status];

  return <span className={color}>{label}</span>;
}
