import { ReactNode, useMemo, useState } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";

import { Role } from "../types";

type Props = {
  content: Array<Role>;
  pagesAmount: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
};

export default function RolesView({
  content,
  pagesAmount,
  currentPage,
  onPageChanged,
}: Props) {
  const tableHeader: Array<string> = ["Role", "Related Users Amount"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((role) => [
      <LinkTableItem href={`/role/${role.roleId}`} text={role.title} />,
      <p>{role.relatedUsersCount}</p>,
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
