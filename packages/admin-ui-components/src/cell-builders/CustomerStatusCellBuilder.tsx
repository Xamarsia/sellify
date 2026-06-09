import type { ReactNode } from "react";

import type { CellBuilder } from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";

import CustomerStatus, {
  type CustomerStatusVariant,
} from "../statuses/CustomerStatus";

type CustomerStatusCellBuilderProps = {
  status: CustomerStatusVariant;
};

/**
 * Displays a customer-status badge in a data-view cell.
 *
 * @param status - Customer status variant to display
 */
export const CustomerStatusCellBuilder = {
  buildView({ status }: CustomerStatusCellBuilderProps): ReactNode {
    return <CustomerStatus status={status} />;
  },
} satisfies CellBuilder<CustomerStatusCellBuilderProps>;
