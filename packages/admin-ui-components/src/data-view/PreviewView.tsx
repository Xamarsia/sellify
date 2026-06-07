import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

import type { Cell } from "@sellify/common-ui-components/types";

import { AdminPreview } from "../types";

type PreviewViewProps = {
  content: Array<AdminPreview>;
};

const cellPrototypes: ReadonlyArray<Cell<AdminPreview>> = [
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
];

export default function PreviewView({ content }: PreviewViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
