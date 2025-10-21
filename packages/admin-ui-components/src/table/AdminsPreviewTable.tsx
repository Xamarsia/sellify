import { ReactNode, useMemo } from "react";

import Table from "@sellify/common-ui-components/table/Table";
import { AdminPreview } from "../types";

type Props = {
  content: Array<AdminPreview>;
};

export default function AdminsPreviewTable({ content }: Props) {
  const tableHeader: Array<string> = ["Admin ID", "Name", "Role"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((admin) => [
      <h4>{"#" + admin.adminId}</h4>,
      <p>{admin.name}</p>,
      <p>{admin.role}</p>,
    ]);
  }, [content]);

  return <Table head={tableHeader} content={getContentArray} />;
}
