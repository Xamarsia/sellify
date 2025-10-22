import { useMemo } from "react";

import { ProductStatus } from "constants";
import { ProductStatus as ProductStatusType } from "types";

type Props = {
  status: ProductStatusType;
};

export default function ProductStatusComponent({ status }: Props) {
  const color = useMemo<string>(() => {
    switch (status) {
      case ProductStatus.Active:
        return "text-[#279F51]";
      case ProductStatus.Archived:
      default:
        return "text-placeholder";
    }
  }, [status]);

  const valueLabel = useMemo<string>(() => {
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
