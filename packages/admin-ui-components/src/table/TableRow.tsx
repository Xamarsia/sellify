import { ReactNode } from "react"

type Props = {
    row: Array<ReactNode>,
}

export default function TableRow({ row }: Props) {
    return (
        <tr className="body min-h-16 max-h-24 hover:bg-[#F8F8F8]">
            {row.map((component, index) => (
                <td className="px-6 py-3 mx-2" key={"Cell:" + index}>
                    {component}
                </td>
            ))}
        </tr>
    )
}
