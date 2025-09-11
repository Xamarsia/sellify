import { useMemo } from "react";

import { ProductStatus } from "@sellify/common-ui-components/constants.ts";
import { ProductStatus as ProductStatusType } from "@sellify/common-ui-components/types.ts";

type Props = {
  status: ProductStatusType;
};

export default function ProductStatusComponent({ status }: Props) {
  const color = useMemo(() => {
    switch (status) {
      case ProductStatus.Active:
        return "text-[#279F51]";
      case ProductStatus.Archived:
      default:
        return "text-placeholder";
    }
  }, [status]);

  const valueLabel = useMemo(() => {
    switch (status) {
      case ProductStatus.Active:
        return "Active";
      case ProductStatus.Archived:
        return "Archived";
      default:
        return status;
    }
  }, [status]);

  return <span className={color}>{valueLabel}</span>;
}
