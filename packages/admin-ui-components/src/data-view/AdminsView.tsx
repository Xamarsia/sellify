import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import DateTableItem from "@sellify/common-ui-components/table-items/DateTableItem";

import { Admin } from "../types";
import AdminStatusComponent from "../statuses/AdminStatusComponent";

type Props = {
  content: Array<Admin>;
};

export default function AdminsView({ content }: Props) {
  const tableHeader: Array<string> = [
    "Name",
    "Admin ID",
    "Created On",
    "Role",
    "Status",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((admin) => [
      <LinkTableItem href={`/admin/${admin.adminId}`} text={admin.name} />,
      <IdTableItem id={admin.adminId} />,
      <DateTableItem date={admin.createdOn} />,
      <LinkTableItem
        href={`/role/${admin.role.roleId}`}
        text={admin.role.title}
      />,
      <AdminStatusComponent status={admin.status} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
