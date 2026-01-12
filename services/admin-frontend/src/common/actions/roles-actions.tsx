import { AdminPreview, Role } from "@sellify/admin-ui-components/types";
import { Permission } from "@sellify/admin-ui-components/enums";

import { getAdminsPreviews } from "./admins-actions";

const role: Role = {
  roleId: 1234234,
  title: "ContentManager",
  relatedUsersCount: 1,
  permissions: [
    Permission.VIEW_PRODUCT,
    Permission.CREATE_PRODUCT,
    Permission.ARCHIVE_PRODUCT,
    Permission.EDIT_PRODUCT,
  ],
};

const role2: Role = {
  roleId: 1234234,
  title:
    "LongUnbreakableRoleTitle|LongUnbreakableRoleTitleLongUnbreakableRoleTitle",
  relatedUsersCount: 1,
  permissions: [Permission.ARCHIVE_ADMIN, Permission.CREATE_ADMIN],
};

const role3: Role = {
  roleId: 1234234,
  title:
    "Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title",
  relatedUsersCount: 1,
  permissions: [Permission.ARCHIVE_ADMIN, Permission.CREATE_ADMIN],
};

export function getRoleById(roleId: number): Role {
  return role;
}

export function getAdminsPreviewsByRoleId(roleId: number): Array<AdminPreview> {
  return getAdminsPreviews();
}

export function filterRoles(query: string): Array<Role> {
  return [role, role2];
}

export function getRoles(): Array<Role> {
  return [
    role,
    role,
    role2,
    role3,
    role2,
    role3,
    role,
    role2,
    role,
    role3,
    role2,
    role,
    role,
    role,
    role3,
    role,
    role3,
    role,
    role,
    role3,
    role3,
    role2,
    role2,
    role2,
  ];
}
