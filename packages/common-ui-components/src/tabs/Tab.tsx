"use client";


type TabProps = {
    text: string,
    href: string,
    selected?: boolean,
}


export default function Tab({ text, href, selected }: TabProps) {
    return (
        <a href={href}
            className={`flex items-center px-6 h-13 bg-primary text-[#555555] border-b cursor-pointer hover:text-black hover:border-black 
            ${selected ? `h4 border-black text-black` : `body border-stroke`}`}
        >
            {text}
        </a>
    )
}
