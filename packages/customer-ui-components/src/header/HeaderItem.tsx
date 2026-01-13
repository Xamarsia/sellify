"use client";

type SidebarItemProps = {
  text: string;
  href: string;
  selected?: boolean;
};

export default function HeaderItem({ text, href, selected }: SidebarItemProps) {
  return (
    <a
      href={href}
      className={`flex items-center gap-x-2 m-1 h-10 bg-white underline-offset-4 
        hover:underline hover:text-black enabled:cursor-pointer body
        ${selected ? `underline text-black` : `text-secondary`}
      `}
    >
      {text}
    </a>
  );
}
