import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";

import { AdminPreview } from "../types";

type AdminsPreviewViewProps = {
  content: Array<AdminPreview>;
  pagesAmount: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
};

export default function AdminsPreviewView({
  content,
  pagesAmount,
  currentPage,
  onPageChanged,
}: AdminsPreviewViewProps) {
  const tableHeader: Array<string> = ["Name", "Admin ID"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((admin) => [
      <LinkTableItem href={`/admin/${admin.adminId}`} text={admin.name} />,
      <IdTableItem id={admin.adminId} />,
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
