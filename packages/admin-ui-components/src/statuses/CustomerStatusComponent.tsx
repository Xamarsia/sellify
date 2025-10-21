import { useMemo } from "react";

import { CustomerStatus } from "../constants";
import { CustomerStatus as CustomerStatusType } from "../types";

type Props = {
  status: CustomerStatusType;
};

export default function CustomerStatusComponent({ status }: Props) {
  const color = useMemo<string>(() => {
    switch (status) {
      case CustomerStatus.Active:
        return "text-[#279F51]";
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
