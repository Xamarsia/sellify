import { NavMenuItem } from "@sellify/common-ui-components/types";

export const MainMenuItems: Array<NavMenuItem> = [
  { href: "/home", title: "Home" },
  { href: "/orders", title: "Orders" },
  { href: "/products", title: "Products" },
  { href: "/category", title: "Category" },
  { href: "/inventory", title: "Inventory" },
  { href: "/customers", title: "Customers" },
  { href: "/admins", title: "Admins" },
  { href: "/roles", title: "Roles" },
  { href: "/settings", title: "Settings" },
] as const;
