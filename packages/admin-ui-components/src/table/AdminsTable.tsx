import { ReactNode, useMemo } from "react";
import AdminStatusComponent from "../statuses/AdminStatusComponent";
import Table from "./common/Table";

type Props = {
  content: Array<Admin>;
};

export default function AdminsTable({ content }: Props) {
  const tableHeader: Array<string> = [
    "Admin ID",
    "Name",
    "Role",
    "Created On",
    "Status",
  ];

  const getContentArray = useMemo((): Array<Array<ReactNode>> => {
    return content.map((admin) => [
      <h4>{"#" + admin.adminId}</h4>,
      <p>{admin.name}</p>,
      <p>{admin.role}</p>,
      <p>{admin.createdOn}</p>,
      <AdminStatusComponent status={admin.status} />,
    ]);
  }, [content]);

  return <Table head={tableHeader} content={getContentArray} />;
}
