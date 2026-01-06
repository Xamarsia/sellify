import { NavMenuItem } from "@sellify/common-ui-components/types";
import { Permission } from "enums";

export const MainMenuItems: Array<NavMenuItem> = [
  { href: "/home", title: "Home" },
  { href: "/orders", title: "Orders" },
  { href: "/products", title: "Products" },
  { href: "/categories", title: "Categories" },
  { href: "/inventory", title: "Inventory" },
  { href: "/customers", title: "Customers" },
  { href: "/admins", title: "Admins" },
  { href: "/roles", title: "Roles" },
  { href: "/security", title: "Security" },
] as const;

// Map<number, string>
export const Permissions = [
  [Permission.ARCHIVE_ADMIN, "Archive Admin"],
  [Permission.ARCHIVE_PRODUCT, "Archive Product"],
  [Permission.EDIT_ADMIN, "Edit Admin"],
  [Permission.EDIT_PRODUCT, "Edit Product"],
  [Permission.CREATE_ADMIN, "Create Admin"],
  [Permission.CREATE_PRODUCT, "Create Product"],
  [Permission.VIEW_ADMIN, "View Admin"],
  [Permission.VIEW_PRODUCT, "View Product"],
] as const;
