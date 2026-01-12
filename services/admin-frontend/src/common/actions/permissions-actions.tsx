import {
  Permission,
  RolePreview,
} from "@sellify/admin-ui-components/types";
import { getRolePreviews } from "./roles-actions";

const permission: Permission = {
  permissionId: 1234234,
  title: "ContentManager",
  description:
    "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  relatedRolesCount: 3,
};

const permission2: Permission = {
  permissionId: 1234234,
  title:
    "LongUnbreakablePermissionTitle|LongUnbreakablePermissionTitleLongUnbreakablePermissionTitle",
  description:
    "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  relatedRolesCount: 0,
};

const permission3: Permission = {
  permissionId: 1234234,
  title:
    "Long Permission Title | Long Permission Title | Long Permission Title | Long Permission Title | Long Permission Title | Long Permission Title | Long Permission Title | Long Permission Title | Long Permission Title",
  description:
    "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  relatedRolesCount: 5,
};

export function getPermissionById(permissionId: number): Permission {
  return permission;
}

export function filterPermissions(query: string): Array<Permission> {
  return [permission2, permission3];
}

export function getRolePreviewsByPermissionId(
  permissionId: number,
): Array<RolePreview> {
  return getRolePreviews();
}

export function getPermissions(): Array<Permission> {
  return [
    permission,
    permission,
    permission2,
    permission3,
    permission2,
    permission3,
    permission,
    permission2,
    permission,
    permission3,
    permission2,
    permission,
    permission,
    permission,
    permission3,
    permission,
    permission3,
    permission,
    permission,
    permission3,
    permission3,
    permission2,
    permission2,
    permission2,
  ];
}
