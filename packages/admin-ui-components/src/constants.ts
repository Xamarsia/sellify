import { Permission } from "./enums";

export const AdminStatus = {
  Active: "ACTIVE",
  Invited: "INVITED",
  Disabled: "DISABLED",
} as const;

export const CustomerStatus = {
  Active: "ACTIVE",
  Archived: "ARCHIVED",
} as const;

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
