import { ReactNode, useMemo } from "react";

import { Admin } from "../types";
import AdminStatusComponent from "../statuses/AdminStatusComponent";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

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
      <LinkButton>
        <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
          {admin.name}
        </p>
      </LinkButton>,
      <p>{"#" + admin.adminId}</p>,

      <p>{admin.createdOn}</p>,
      <LinkButton>
        <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
          {admin.role}
        </p>
      </LinkButton>,
      <AdminStatusComponent status={admin.status} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
