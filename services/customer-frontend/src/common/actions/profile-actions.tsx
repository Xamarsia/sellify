import { SidebarItemInfo } from "@sellify/common-ui-components/types";

export function getSidebarItems(): Array<SidebarItemInfo> {
  const items: Array<SidebarItemInfo> = [
    { href: "/profile/", title: "Profile" },
    { href: "/profile/orders", title: "Order History" },
    // { href: "/profile/wishlist", title: "Wishlist" },
    { href: "/profile/settings", title: "Settings" },
  ];
  return items;
}
