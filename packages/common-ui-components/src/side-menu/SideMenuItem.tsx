"use client";

type SideMenuItemProps = {
  text: string;
  href: string;
  selected?: boolean;
};

export default function SideMenuItem({
  text,
  href,
  selected,
}: SideMenuItemProps) {
  return (
    <a
      href={href}
      className={`flex items-center h-10 bg-white underline-offset-4 
        hover:underline hover:text-black enabled:cursor-pointer body
        ${selected ? `underline text-black` : `text-secondary`}
      `}
    >
      {text}
    </a>
  );
}
