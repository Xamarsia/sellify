import { ReactNode, useMemo } from "react";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

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
      <LinkButton href={`admin/${admin.adminId}`}>
        <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
          {admin.name}
        </p>
      </LinkButton>,
      <div className="flex items-center gap-1">
        #
        <p>{admin.adminId}</p>
      </div>,
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
