"use client"


import SidebarItem from "./SidebarItem";

type Props = {
    items: Array<SidebarItemInfo>,
    pathname: string
}


export default function Sidebar({ items, pathname }: Props) {
    return (
        <nav className="flex flex-col gap-2">
            {items.map(({ href, title }) => {
                return <SidebarItem key={title} href={href} text={title} selected={pathname == href} />
            })}
        </nav>
    )
}