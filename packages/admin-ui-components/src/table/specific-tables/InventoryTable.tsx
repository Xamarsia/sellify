import { ReactNode, useMemo, useState } from "react";

import Table from "../Table";
import ProductPreviewImage from "../../ProductPreviewImage";
import AddAmountButton from "../../AddAmountButton";


type Props = {
    content: Array<Inventory>,
    onSubmit: (value: number) => void,
    disabled?: boolean,
}


export default function InventoryTable({ disabled, content, onSubmit }: Props) {
    const tableHeader: Array<string> = ['Product', "Product ID", "Quantity", "Actions"];
    const [quantity, setQuantity] = useState<number>();

    const getContentArray = useMemo((): Array<Array<ReactNode>> => {
        return content.map(inventory => (
            [
                <div className="flex gap-4 items-center">
                    <ProductPreviewImage src={inventory.image} />
                    <h4>{inventory.productTitle}</h4>
                </div>,
                <h4>{"#" + inventory.productId}</h4>,
                <p>{inventory.quantity + " in stock"}</p>,
                <AddAmountButton value={quantity} onChange={setQuantity} onSubmit={setQuantity} disabled={disabled} />
            ]
        ))
    }, [content]);

    return (
        <Table head={tableHeader} content={getContentArray} />
    )
}
