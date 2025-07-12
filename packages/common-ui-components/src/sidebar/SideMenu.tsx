"use client"


import SidebarItem from "./SidebarItem.js";

type Props = {
    items: Array<SidebarItemInfo>
}


export default function Sidebar({ items }: Props) {
    const pathname: string = location.pathname;

    return (
        <nav className="flex flex-col gap-2">
            {items.map(({href, title}) => {
                return <SidebarItem key={title} href={href} text={title} selected={pathname == href} />
            })}
        </nav>
    )
}