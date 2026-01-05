import { NavMenuItem } from "@sellify/common-ui-components/types";

export const ProfileMenuItems: Array<NavMenuItem> = [
  { href: "/profile", title: "Profile" },
  { href: "/profile/orders", title: "Order History" },
  { href: "/profile/security", title: "Security" },
] as const;
