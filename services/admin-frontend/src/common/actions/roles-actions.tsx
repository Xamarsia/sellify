import { Role } from "@sellify/admin-ui-components/types";

const role: Role = {
  title: "ContentManager",
  relatedUsersCount: 1,
};

const role2: Role = {
  title:
    "LongUnbreakableRoleTitle|LongUnbreakableRoleTitleLongUnbreakableRoleTitle",
  relatedUsersCount: 1,
};

const role3: Role = {
  title:
    "Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title | Long Role Title",
  relatedUsersCount: 1,
};

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
