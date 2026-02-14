import { useMemo } from "react";

import { AdminStatus } from "../constants";
import { AdminStatus as AdminStatusType } from "../types";

type AdminStatusComponentProps = {
  status: AdminStatusType;
};

export default function AdminStatusComponent({
  status,
}: AdminStatusComponentProps) {
  const color = useMemo<string>(() => {
    switch (status) {
      case AdminStatus.Active:
        return "text-essential-green";
      case AdminStatus.Invited:
        return "text-essential-red";
      case AdminStatus.Disabled:
      default:
        return "text-placeholder";
    }
  }, [status]);

  const valueLabel = useMemo<string>(() => {
    switch (status) {
      case AdminStatus.Active:
        return "Active";
      case AdminStatus.Invited:
        return "Invited";
      case AdminStatus.Disabled:
        return "Disabled";
      default:
        return status;
    }
  }, [status]);

  return <span className={color}>{valueLabel}</span>;
}
