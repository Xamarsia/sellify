import type { ReactNode } from "react";

import type { CellBuilder } from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";

import AdminStatus, { type AdminStatusVariant } from "../statuses/AdminStatus";

type AdminStatusCellBuilderProps = {
  status: AdminStatusVariant;
};

/**
 * Displays an admin-status badge in a data-view cell.
 *
 * @param status - Admin status variant to display
 */
export const AdminStatusCellBuilder = {
  buildView({ status }: AdminStatusCellBuilderProps): ReactNode {
    return <AdminStatus status={status} />;
  },
} satisfies CellBuilder<AdminStatusCellBuilderProps>;
