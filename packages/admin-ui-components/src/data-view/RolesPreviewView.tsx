import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

import LinkTableItem from "../table-items/LinkTableItem";
import IdTableItem from "../table-items/IdTableItem";
import { RolePreview } from "../types";

type Props = {
  content: Array<RolePreview>;
};

export default function RolesPreviewView({ content }: Props) {
  const tableHeader: Array<string> = ["Title", "Role ID"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((role) => [
      <LinkTableItem href={`/role/${role.roleId}`} text={role.title} />,
      <IdTableItem id={role.roleId} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
