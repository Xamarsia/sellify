import { AdminStatus } from "@sellify/admin-ui-components/constants";
import { Admin, AdminPreview } from "@sellify/admin-ui-components/types";

const admin: Admin = {
  adminId: 233432,
  name: "Ronald Jones",
  role: "Content Manager",
  createdOn: "Jan 10, 2020",
  status: AdminStatus.Active,
};

const admin2: Admin = {
  adminId: 233432,
  name: "Long Admin Name | Long Admin Name | Long Admin Name | Long Admin Name | Long Admin Name | Long Admin Name | Long Admin Name | Long Admin Name | Long Admin Name",
  role: "Content Manager",
  createdOn: "Jan 10, 2020",
  status: AdminStatus.Disabled,
};

const admin3: Admin = {
  adminId: 233432,
  name: "LongUnbreakableAdminName|LongUnbreakableAdminNameLongUnbreakableAdminName",
  role: "Content Manager",
  createdOn: "Jan 10, 2020",
  status: AdminStatus.Active,
};

const adminPreview: AdminPreview = {
  adminId: 233432,
  name: "Ronald Jones",
  role: "Content Manager",
};

export function getAdminById(adminId: number): Admin {
  return admin;
}

export function filterAdmins(query: string): Array<Admin> {
  return [admin, admin3];
}

export function getAdmins(): Array<Admin> {
  return [
    admin3,
    admin,
    admin2,
    admin3,
    admin,
    admin,
    admin2,
    admin,
    admin3,
    admin3,
    admin2,
    admin,
    admin3,
    admin2,
    admin,
    admin,
    admin2,
    admin2,
    admin3,
    admin,
    admin2,
    admin,
    admin,
    admin3,
  ];
}
