"use client";

import { NavMenuItem } from "../types";
import SideMenuItem from "./SideMenuItem";

type SideMenuProps = {
  items: Array<NavMenuItem>;
  pathname: string;
};

export default function SideMenu({ items, pathname }: SideMenuProps) {
  return (
    <nav className="flex flex-col sm:gap-2 w-full">
      {items.map(({ href, title }) => {
        return (
          <SideMenuItem
            key={title}
            href={href}
            text={title}
            selected={pathname === href}
          />
        );
      })}
    </nav>
  );
}
