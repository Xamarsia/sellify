import { ReactNode, useMemo } from "react";
import Table from "../Table";
import OrderStatusComponent from "../../../statuses/OrderStatusComponent";

type Props = {
    content: Array<Order>
}

export default function OrdersTable({ content }: Props) {
    const tableHeader: Array<string> = ['Order ID', 'Date', 'Customer', 'Total', 'Status', 'Items'];

    const getContentArray = useMemo((): Array<Array<ReactNode>> => {
        return content.map(order => (
            [
                <h4 key={"orderid"+ order.orderId}>{"#" + order.orderId}</h4>,
                <p>{order.date}</p>,
                <p>{order.date}</p>,
                <p>{"$" + order.total}</p>,
                <OrderStatusComponent status={order.status} />,
                <p>{order.items + `${order.items > 1 ? " items" : " item"}`}</p>,
            ]
        ))
    }, [content]);

    return (
        <Table head={tableHeader} content={getContentArray} />
    )
}
