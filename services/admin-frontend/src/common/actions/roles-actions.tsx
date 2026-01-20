import {
  AdminPreview,
  Role,
  RolePreview,
} from "@sellify/admin-ui-components/types";
import { Permission } from "@sellify/admin-ui-components/enums";

import { getAdminsPreviews } from "./admins-actions";

const rolePreview: RolePreview = {
  roleId: 34,
  title: "ContentManager",
};

const rolePreview2: RolePreview = {
  roleId: 2334,
  title:
    "LongUnbreakableRoleTitle|LongUnbreakableRoleTitleLongUnbreakableRoleTitle",
};

const rolePreview3: RolePreview = {
  roleId: 234,
  title:
    "Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title",
};

const role: Role = {
  roleId: 233,
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
  roleId: 235,
  title:
    "LongUnbreakableRoleTitle|LongUnbreakableRoleTitleLongUnbreakableRoleTitle",
  relatedUsersCount: 1,
  permissions: [Permission.ARCHIVE_ADMIN, Permission.CREATE_ADMIN],
};

const role3: Role = {
  roleId: 2345,
  title:
    "Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title",
  relatedUsersCount: 1,
  permissions: [Permission.ARCHIVE_ADMIN, Permission.CREATE_ADMIN],
};

export function getRoleById(roleId: number): Role {
  return role;
}

export function getRolePreviews(): Array<RolePreview> {
  return [
    rolePreview,
    rolePreview,
    rolePreview2,
    rolePreview3,
    rolePreview2,
    rolePreview3,
    rolePreview,
    rolePreview2,
    rolePreview,
    rolePreview3,
    rolePreview2,
    rolePreview,
    rolePreview,
    rolePreview,
    rolePreview3,
    rolePreview,
    rolePreview3,
    rolePreview,
    rolePreview,
    rolePreview3,
    rolePreview3,
    rolePreview2,
    rolePreview2,
    rolePreview2,
  ];
}

export function getRolePreviewsComboboxItems(): Map<string, string> {
  return new Map<string, string>(
    getRolePreviews().map(role => [role.roleId.toString(), role.title])
  );
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
