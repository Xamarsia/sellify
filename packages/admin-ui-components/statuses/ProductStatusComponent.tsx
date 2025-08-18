import { useMemo } from "react";
import { ProductStatus } from "./../src/constants";

type Props = {
  status: ProductStatus;
};

export default function ProductStatusComponent({ status }: Props) {
  type ProductProps = {
    color: string;
    value: string;
  };

  const statusProps = useMemo((): ProductProps => {
    switch (status) {
      case ProductStatus.Active:
        return {
          color: "text-[#279F51]",
          value: "Active",
        };
      case ProductStatus.Archived:
        return {
          color: "text-placeholder",
          value: "Archived",
        };
      default:
        return {
          color: "text-placeholder",
          value: status,
        };
    }
  }, [status]);

  return <span className={`${statusProps.color}`}>{statusProps.value}</span>;
}
