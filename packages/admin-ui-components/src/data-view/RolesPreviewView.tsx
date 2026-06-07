import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

import { RolePreview } from "../types";

type RolesPreviewViewProps = {
  content: Array<RolePreview>;
};

const cellPrototypes: ReadonlyArray<Cell<RolePreview>> = [
  {
    title: "Title",
    viewBuilder: ({ roleId, title }) => (
      <LinkTableItem href={`/role/${roleId}`} text={title} />
    ),
  },
  {
    title: "Role ID",
    viewBuilder: ({ roleId }) => <IdTableItem id={roleId} />,
  },
];

export default function RolesPreviewView({ content }: RolesPreviewViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
