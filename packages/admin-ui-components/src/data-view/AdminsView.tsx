import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import DateTableItem from "@sellify/common-ui-components/table-items/DateTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

import { Admin } from "../types";
import AdminStatusComponent from "../statuses/AdminStatusComponent";

type AdminsViewProps = {
  content: Array<Admin>;
};

const cellPrototypes: ReadonlyArray<Cell<Admin>> = [
  {
    title: "Name",
    viewBuilder: ({ adminId, name }) => (
      <LinkTableItem href={`/admin/${adminId}`} text={name} />
    ),
  },
  {
    title: "Admin ID",
    viewBuilder: ({ adminId }) => <IdTableItem id={adminId} />,
  },
  {
    title: "Created On",
    viewBuilder: ({ createdOn }) => <DateTableItem date={createdOn} />,
  },
  {
    title: "Role",
    viewBuilder: ({ role }) => (
      <LinkTableItem href={`/role/${role.roleId}`} text={role.title} />
    ),
  },
  {
    title: "Status",
    viewBuilder: ({ status }) => <AdminStatusComponent status={status} />,
  },
];

export default function AdminsView({ content }: AdminsViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
