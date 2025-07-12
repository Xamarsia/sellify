"use client";


import Tab from "./Tab.js";


type TabsProps = {
    items: Array<TabItemInfo>
}


export default function Tabs({ items }: TabsProps) {
    const pathname: string = location.pathname;

    return (
        <nav className="w-full flex flex-wrap border-b border-stroke">
            {items.map(({ href, title }) => {
                return <Tab key={title} href={href} text={title} selected={pathname == href} />
            })}
        </nav>
    )
}
