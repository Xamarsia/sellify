"use client";

import Tab from "./Tab";

type TabsProps = {
  items: Array<TabItemInfo>;
  pathname: string;
};

export default function Tabs({ items, pathname }: TabsProps) {
  return (
    <nav className="w-full flex flex-wrap border-b border-stroke">
      {items.map(({ href, title }) => {
        return (
          <Tab
            key={title}
            href={href}
            text={title}
            selected={pathname == href}
          />
        );
      })}
    </nav>
  );
}
