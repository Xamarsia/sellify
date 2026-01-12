import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

import { Role } from "../types";
import LinkTableItem from "../table-items/LinkTableItem";

type Props = {
  content: Array<Role>;
};

export default function RolesView({ content }: Props) {
  const tableHeader: Array<string> = ["Role Name", "Related Users Amount"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((role) => [
      <LinkTableItem href={`/role/${role.roleId}`} text={role.title} />,
      <p>{role.relatedUsersCount}</p>,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
