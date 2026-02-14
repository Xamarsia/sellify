import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";

import { Permission } from "../types";

type PermissionsViewProps = {
  content: Array<Permission>;
  pagesAmount: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
};

export default function PermissionsView({
  content,
  pagesAmount,
  currentPage,
  onPageChanged,
}: PermissionsViewProps) {
  const tableHeader: Array<string> = ["Permission", "Related Roles Amount"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((permission) => [
      <LinkTableItem
        href={`/permission/${permission.permissionId}`}
        text={permission.title}
      />,
      <p>{permission.relatedRolesCount}</p>,
    ]);
  }, [content]);

  return (
    <AdaptiveDataView
      head={tableHeader}
      content={getContentArray}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      pagesAmount={pagesAmount}
    />
  );
}
