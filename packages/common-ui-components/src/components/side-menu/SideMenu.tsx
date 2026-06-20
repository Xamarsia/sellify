import type { NavMenuItem } from "../../types";
import SideMenuItem from "./SideMenuItem";

type SideMenuProps = {
  items: ReadonlyArray<NavMenuItem>;
  pathname: string;
};

/**
 * Renders navigation items as a vertical side menu.
 *
 * The item whose destination matches the current pathname is marked as
 * selected.
 *
 * @param items - Navigation destinations and display titles
 * @param pathname - Current pathname used to select the active item
 */
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
