import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

import { Permission } from "../types";

type PermissionsViewProps = {
  content: Array<Permission>;
};

const cellPrototypes: ReadonlyArray<Cell<Permission>> = [
  {
    title: "Permission",
    viewBuilder: ({ permissionId, title }) => (
      <LinkTableItem href={`/permission/${permissionId}`} text={title} />
    ),
  },
  {
    title: "Related Roles Amount",
    viewBuilder: ({ relatedRolesCount }) => <p>{relatedRolesCount}</p>,
  },
];

export default function PermissionsView({ content }: PermissionsViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
