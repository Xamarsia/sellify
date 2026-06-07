import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

import { Role } from "../types";

type RolesViewProps = {
  content: Array<Role>;
};

const cellPrototypes: ReadonlyArray<Cell<Role>> = [
  {
    title: "Role",
    viewBuilder: ({ roleId, title }) => (
      <LinkTableItem href={`/role/${roleId}`} text={title} />
    ),
  },
  {
    title: "Related Users Amount",
    viewBuilder: ({ relatedUsersCount }) => <p>{relatedUsersCount}</p>,
  },
];

export default function RolesView({ content }: RolesViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
