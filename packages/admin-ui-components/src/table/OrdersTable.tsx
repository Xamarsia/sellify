import { ReactNode, useMemo } from "react";
import Table from "./Table";
import OrderStatusComponent from "../../statuses/OrderStatusComponent";

type Props = {
    content: Array<Order>
}

export default function OrdersTable({ content }: Props) {
    const tableHeader: Array<string> = ['Order ID', 'Date', 'Customer', 'Total', 'Status', 'Items'];

    const getContentArray = useMemo((): Array<Array<ReactNode>> => {
        return content.map(order => (
            [
                <h4>{"#" + order.orderId}</h4>,
                <p>{order.date}</p>,
                <p>{order.date}</p>,
                <p>{"$" + order.total}</p>,
                <OrderStatusComponent status={order.status} />,
                <p>{order.items + `${order.items > 1 ? " items" : " item"}`}</p>,
            ]
        ))
    }, [content]);

    return (
        <div className="flex flex-row m-16 gap-10">
            <Table head={tableHeader} content={getContentArray} />
        </div>
    )
}
