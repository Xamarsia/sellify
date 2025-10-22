"use client";

import { NavMenuItem } from "../types";
import SidebarItem from "./SidebarItem";

type Props = {
  items: Array<NavMenuItem>;
  pathname: string;
};

export default function Sidebar({ items, pathname }: Props) {
  return (
    <nav className="flex flex-col sm:gap-2">
      {items.map(({ href, title }) => {
        return (
          <SidebarItem
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
