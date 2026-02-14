import { useMemo } from "react";

import { CustomerStatus } from "../constants";
import { CustomerStatus as CustomerStatusType } from "../types";

type CustomerStatusComponentProps = {
  status: CustomerStatusType;
};

export default function CustomerStatusComponent({
  status,
}: CustomerStatusComponentProps) {
  const color = useMemo<string>(() => {
    switch (status) {
      case CustomerStatus.Active:
        return "text-essential-green";
      case CustomerStatus.Archived:
      default:
        return "text-placeholder";
    }
  }, [status]);

  const valueLabel = useMemo<string>(() => {
    switch (status) {
      case CustomerStatus.Active:
        return "Active";
      case CustomerStatus.Archived:
        return "Archived";
      default:
        return status;
    }
  }, [status]);

  return <span className={color}>{valueLabel}</span>;
}
