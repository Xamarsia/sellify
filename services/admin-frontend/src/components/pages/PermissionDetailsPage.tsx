"use client";

import Card from "@sellify/admin-ui-components/card/Card";
import { Permission, RolePreview } from "@sellify/admin-ui-components/types";
import RolesPreviewView from "@sellify/admin-ui-components/data-view/RolesPreviewView";
import InfoSection from "@sellify/admin-ui-components/InfoSection";

import Filter from "components/Filter";
import { RolesFilterSections } from "filter-sections/roles-filter";

type Props = {
  permission: Permission;
  relatedRoles: Array<RolePreview>;
};

export default function PermissionDetailsPage({
  permission,
  relatedRoles,
}: Props) {
  return (
    <>
      <h1 className="py-4">{`Permission: ${permission.title}`}</h1>
      <Card label="Related Roles" value={`${permission.relatedRolesCount}`} />
      <InfoSection title="Related Roles">
        <Filter filterSections={RolesFilterSections} />
        <RolesPreviewView content={relatedRoles} />
      </InfoSection>
    </>
  );
}
