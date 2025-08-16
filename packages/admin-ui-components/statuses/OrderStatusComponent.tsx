import { useMemo } from "react";
import { OrderStatus } from "./../src/constants";

type Props = {
    status: OrderStatus
}

export default function OrderStatusComponent({ status }: Props) {

    type OrderProps = {
        color: string,
        value: string,
    }

    const statusProps = useMemo((): OrderProps => {
        switch (status) {
            case OrderStatus.New:
                return {
                    color: "text-[#279F51]",
                    value: "New"
                }
            case OrderStatus.InProgress:
                return {
                    color: "text-[#FFA000]",
                    value: "In Progress"
                }
            case OrderStatus.Shipped:
                return {
                    color: "text-[#2F80ED]",
                    value: "Shipped"
                }
            case OrderStatus.Canceled:
                return {
                    color: "text-[#FF392B]",
                    value: "Canceled"
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
