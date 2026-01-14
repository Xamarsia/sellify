import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";

import { Permission } from "../types";

type Props = {
  content: Array<Permission>;
};

export default function PermissionsView({ content }: Props) {
  const tableHeader: Array<string> = [
    "Permission Name",
    "Related Roles Amount",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((permission) => [
      <LinkTableItem
        href={`/permission/${permission.permissionId}`}
        text={permission.title}
      />,
      <p>{permission.relatedRolesCount}</p>,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
