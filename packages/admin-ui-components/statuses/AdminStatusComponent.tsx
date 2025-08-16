import { useMemo } from "react";
import { AdminStatus } from "./../src/constants";

type Props = {
    status: AdminStatus
}

export default function AdminStatusComponent({ status }: Props) {

    type ProductProps = {
        color: string,
        value: string,
    }

    const statusProps = useMemo((): ProductProps => {
        switch (status) {
            case AdminStatus.Active:
                return {
                    color: "text-[#279F51]",
                    value: "Active"
                }
            case AdminStatus.Invited:
                return {
                    color: "text-[#FFA000]",
                    value: "Invited"
                }
            case AdminStatus.Disabled:
                return {
                    color: "text-placeholder",
                    value: "Disabled"
                }
            default:
                return {
                    color: "text-placeholder",
                    value: status
                }
        }
    }, [status]);

    return (
        <span className={`${statusProps.color}`}>{statusProps.value}</span>
    )
}
