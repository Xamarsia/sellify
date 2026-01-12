import { ReactNode, useMemo } from "react";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

import { Admin } from "../types";
import AdminStatusComponent from "../statuses/AdminStatusComponent";
import LinkTableItem from "../table-items/LinkTableItem";
import IdTableItem from "../table-items/IdTableItem";

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
      <p>{admin.createdOn}</p>,
      <LinkButton href={`role/${admin.role.roleId}`}>
        <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
          {admin.role.title}
        </p>
      </LinkButton>,
      <AdminStatusComponent status={admin.status} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
