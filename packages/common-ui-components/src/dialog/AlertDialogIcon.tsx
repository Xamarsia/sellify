import { ReactNode } from "react"

type Props = {
    icon: ReactNode,
}

export default function AlertDialogIcon({ icon }: Props) {
    return (
        <div className="flex items-center justify-center size-20 bg-black/30 rounded-full">
            <div className="flex items-center justify-center size-16 bg-black/50 rounded-full">
                <div className="flex items-center justify-center size-12 bg-[#1E1E1E] rounded-full">
                    <div className="size-6 text-white stroke-[1.5]">
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    )
}
