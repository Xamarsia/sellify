import { useMemo } from "react";
import { CustomerStatus } from "../constants";

type Props = {
  status: CustomerStatus;
};

export default function CustomerStatusComponent({ status }: Props) {
  const color = useMemo(() => {
    switch (status) {
      case CustomerStatus.Active:
        return "text-[#279F51]";
      case CustomerStatus.Archived:
      default:
        return "text-placeholder";
    }
  }, [status]);

  const valueLabel = useMemo(() => {
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
