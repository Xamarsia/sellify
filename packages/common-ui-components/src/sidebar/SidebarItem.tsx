"use client";


type SidebarItemProps = {
    text: string,
    href: string,
    selected?: boolean,
}


export default function SidebarItem({ text, href, selected }: SidebarItemProps) {
    return (
        <a href={href}
            className={`flex items-center px-6 h-13 bg-primary underline-offset-4 
                enabled:cursor-pointer  hover:text-[#000000] 
                body ${selected ? `underline text-[#000000]` : `text-[#555555]`}
                `}>
            {text}
        </a>
    )
}
