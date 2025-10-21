"use client";

type SidebarItemProps = {
  text: string;
  href: string;
  selected?: boolean;
};

export default function SidebarItem({
  text,
  href,
  selected,
}: SidebarItemProps) {
  return (
    <a
      href={href}
      className={`flex items-center h-10 bg-primary underline-offset-4 
        hover:underline hover:text-black enabled:cursor-pointer body
        ${selected ? `underline text-black` : `text-[#555555]`}
      `}
    >
      {text}
    </a>
  );
}
