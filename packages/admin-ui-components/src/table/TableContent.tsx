import { ReactNode } from "react"

type Props = {
    body: Array<ReactNode>,
}

export default function TableContent({ body }: Props) {
    return (
        <tbody className="w-full bg-white min-h-16 max-h-24 px-9 py-5">
            <tr className="body hover:bg-[#F8F8F8]">
                {body.map(component => (
                    <td className="px-6 py-3 mx-2" key={component?.toString()}>
                        {component}
                    </td>
                ))}
            </tr>
        </tbody>
    )
}
