import { ReactNode, useMemo } from "react";

import Table from "@sellify/common-ui-components/table/Table";
import { Role } from "../types";

type Props = {
  content: Array<Role>;
};

export default function RolesTable({ content }: Props) {
  const tableHeader: Array<string> = ["Role Name", "Related users"];

  const getContentArray = useMemo((): Array<Array<ReactNode>> => {
    return content.map((role) => [
      <p>{role.title}</p>,
      <p>
        {role.relatedUsersCount +
          `${role.relatedUsersCount > 1 ? " users" : " user"}`}
      </p>,
    ]);
  }, [content]);

  return <Table head={tableHeader} content={getContentArray} />;
}
