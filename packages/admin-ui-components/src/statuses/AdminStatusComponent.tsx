import { useMemo } from "react";

import { AdminStatus } from "../constants";
import { AdminStatus as AdminStatusType } from "../types";

type Props = {
  status: AdminStatusType;
};

export default function AdminStatusComponent({ status }: Props) {
  const color = useMemo(() => {
    switch (status) {
      case AdminStatus.Active:
        return "text-[#279F51]";
      case AdminStatus.Invited:
        return "text-[#FF392B]";
      case AdminStatus.Disabled:
      default:
        return "text-placeholder";
    }
  }, [status]);

  const valueLabel = useMemo(() => {
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
