import type { StatusProps } from "./types";

/**
 * Supported product status values.
 */
export const PRODUCT_STATUS = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;

export type ProductStatusVariant =
  (typeof PRODUCT_STATUS)[keyof typeof PRODUCT_STATUS];

type ProductStatusProps = {
  readonly status: ProductStatusVariant;
};

const productStatusDefinitions = {
  [PRODUCT_STATUS.ACTIVE]: {
    label: "Active",
    color: "text-essential-green",
  },
  [PRODUCT_STATUS.ARCHIVED]: {
    label: "Archived",
    color: "text-placeholder",
  },
} satisfies Readonly<Record<ProductStatusVariant, StatusProps>>;

/**
 * Renders a human-readable product status with status-specific text color.
 *
 * @param status - Product status value to display
 */
export default function ProductStatus({ status }: ProductStatusProps) {
  const { label, color } = productStatusDefinitions[status];

  return <span className={color}>{label}</span>;
}
