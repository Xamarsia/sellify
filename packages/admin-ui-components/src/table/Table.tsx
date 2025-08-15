import { ReactNode } from "react"
import TableContent from "./TableContent"
import TableTop from "./TableTop"

type Props = {
    head: Array<string>,
    content: Array<Array<ReactNode>>,
}

export default function Table({ head, content }: Props) {
    return (
        <div className="w-full bg-white border border-stroke rounded-lg">
            <table className="w-full">
                <TableTop head={head} />
                {content.map(con => (
                    <TableContent body={con} />
                ))}
            </table>
        </div>
    )
}
